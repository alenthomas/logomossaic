import qs from 'qs';
import lodash from 'lodash';
import { queryString, getGroupBy } from './Helper.js'
import { default as Photo } from './models/Photo.js'
import { default as config } from './config.js';
import Feed from './dataservices/Feed.js';
import { removeBrokenMedia, removeVideoMedia, protoRelativeUrl } from './dataservices/DataFilters.js'

const REACT_APP_ENV = process.env.REACT_APP_ENV || "local";
export const API_CONFIG = config.api[REACT_APP_ENV];
const BASE_URL = API_CONFIG.BASE_URL;
const PHOTO_URL = API_CONFIG.PHOTO_URL;
const REFRESH_RATE = 5000;
const FAILURE_RETRY_RATE = 2000;
const { ctag, filter } = queryString();
const params = qs.stringify({ctag, filter});

let get = (url, success, failure) => {
  return fetch(protoRelativeUrl(url))
  .then((response) => response.text().then((text) => text ? JSON.parse(text) : []))
  .then(
    payload => success(payload),
    error => failure(error)
  )
}

let poll = (url, success, failure, refreshRate = REFRESH_RATE) => {
  let successHandler = (payload) => {
    setTimeout(() => {
      poll(url, success, failure, refreshRate);
    }, refreshRate);
    success(payload);
  }
  let failureHandler = (payload) => {
    console.error(`API call failed for ${url}`, payload)
    setTimeout(() => {
      poll(url, success, failure, refreshRate);
    }, FAILURE_RETRY_RATE);
    failure && failure(payload);
  }
  get(url, successHandler, failureHandler);
}

export const watchLeaderboardInfo = (success, failure) => {
  poll(`${BASE_URL}leaderboard?${params}`, success, failure);
}

export const watchTrendingWords = (success, failure) => {
  poll(`${BASE_URL}wordcloud?${params}`, success, failure);
}

// Depricated: User pollPhotos instead
export const watchPhotos = (success, failure) => {
  let photoParams = qs.stringify({ctag, filter, contentType: 'photo'})
  let url = `${PHOTO_URL}social?${photoParams}`;
  let massage = (payload) => {
    let photos = lodash(payload)
      .filter("content.sections[0].embed.media")
      .map((datum) => new Photo(datum).transform())
      .filter("photoSize")
      .value();
    success(photos);
  }
  poll(url, massage, failure, REFRESH_RATE*2);
}

let photosFeed = new Feed();
export const pollPhotos = (success, failure) => {
  let photoParams = qs.stringify({ctag, filter, contentType: 'photo'})
  let url = `${PHOTO_URL}social?${photoParams}`;
  poll(url, (data) => {
    removeBrokenMedia(data, (cleansedData) => {
      removeVideoMedia(cleansedData);
      let photoObjects = lodash.map(cleansedData, datum => new Photo(datum));
      photosFeed.load(photoObjects);
      success(photosFeed);
    })
  }, failure)
}

export const getPhotos = (success, failure) => {
  let photoParams = qs.stringify({ctag, filter, contentType: 'photo'})
  let url = `${PHOTO_URL}social?${photoParams}`;
  get(url, (data) => {
    removeBrokenMedia(data, (cleansedData) => {
      removeVideoMedia(cleansedData);
      let photoObjects = lodash.map(cleansedData, datum => new Photo(datum));
      success(photoObjects);
    })
  }, failure);
}

// Depricated: Use pollFeatured instead
export const watchFeatured = (success, failure) => {
  let url = `${PHOTO_URL}social?${params}`
  poll(url, success, failure);
}

let featuredFeed = new Feed();
export const pollFeatured = (success, failure) => {
  let url = `${PHOTO_URL}social?${params}`;
  poll(url, (data) => {
    removeBrokenMedia(data, (cleansedData) => {
      removeVideoMedia(cleansedData);
      featuredFeed.load(cleansedData);
      success(featuredFeed);
    })
  }, failure)
}

export const watchTweetCount = (success, failure) => {
  let url = `${BASE_URL}tweetcounter?${params}`
  poll(url, success, failure);
}

export const watchVolume = (success, failure) => {
  let params = qs.stringify({ctag: ctag, groupBy: getGroupBy()})
  let url = `${BASE_URL}volume?${params}`
  poll(url, success, failure, REFRESH_RATE*3)
}

export const watchSocial = (success, failure) => {
  poll(`${PHOTO_URL}social?${params}`, success, failure, REFRESH_RATE*5);
}

let TextTweetsFeed = new Feed();
export const pollTextTweets = (success, failure) => {
  let url = `${PHOTO_URL}social?${params}`;
  poll(url, (data) => {
    let textTweets = lodash.filter(data, d => {
      let embed = lodash.get(d, 'content.sections[0].embed');
      return embed && embed.type !== 'media';
    });
    TextTweetsFeed.load(textTweets);
    success(TextTweetsFeed);
  }, failure)
}

export const watchLeaderboard = (success, failure) => {
  poll(`${BASE_URL}leaderboard?${params}`, success, failure, REFRESH_RATE*2);
}

export const watchWordcloud = (success, failure) => {
  poll(`${BASE_URL}wordcloud?${params}`, success, failure, REFRESH_RATE*5);
}

export const getTweetStats = (success, failure) => {
let statParams = qs.stringify({ctag})
  let url = `${PHOTO_URL}social/aggregates?${statParams}`;
  get(url, success, failure);
}

export const getTopTweets = (success, failure) => {
  let params = qs.stringify({ctag: ctag, filter: "top"}),
      url = `${PHOTO_URL}social?${params}`;
  get(url, success, failure);
}

export const getTopHashtags = (filterHashtags = [], success, failure) => {
  let params = qs.stringify({ctag: ctag}),
      url = `${BASE_URL}hashtags?${params}`;
  get(url, (result) => {
    let filteredResult = lodash.filter(result, r => filterHashtags.indexOf(r.hashtag) === -1 )
    success(filteredResult)
  }, failure);
}
