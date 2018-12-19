import qs from 'qs';
import lodash from 'lodash';
import { queryString, getGroupBy, getParams } from './Helper.js'
import { default as Photo } from './models/Photo.js'
import {getApiConfig, getCtagsConfig} from './config/ConfigLoader.js';
import Feed from './dataservices/Feed.js';
import { removeBrokenMedia, removeVideoMedia, protoRelativeUrl } from './dataservices/DataFilters.js'
import { timeoutCollection } from 'time-events-manager';
// provides a wrapper for setTimeout calls
// https://github.com/bargoldi/time-events-manager/blob/master/src/timeout/timeout-decorator.ts

export const API_CONFIG = getApiConfig();
const BASE_URL = API_CONFIG.BASE_URL;
const PHOTO_URL = API_CONFIG.PHOTO_URL;
const REFRESH_RATE = 5000;
const FAILURE_RETRY_RATE = 2000;

let get = (url, success, failure) => {
  return fetch(protoRelativeUrl(url))
  // .then(response => {
  //   if(response.status === 200) {
  //     return response
  //   }
  //   throw new Error('API failed');
  // })
  .then((response) => response.text().then((text) => text ? JSON.parse(text) : []))
  .then(
    payload => success(payload),
    error => failure(error)
  )
  .catch(err => failure(err))
}

let poll = (url, success, failure, refreshRate = REFRESH_RATE) => {
  let successHandler = (payload) => {
    timeoutCollection.add(() => {
      poll(url, success, failure, refreshRate);
    }, refreshRate);
    success(payload);
  }
  let failureHandler = (payload) => {
    console.error(`API call failed for ${url}`, payload)
    timeoutCollection.add(() => {
      poll(url, success, failure, refreshRate);
    }, FAILURE_RETRY_RATE);
    failure && failure(payload);
  }
  get(url, successHandler, failureHandler);
}

export const watchLeaderboardInfo = (params, success, failure) => {
  let urlParams = qs.stringify(params);
  poll(`${BASE_URL}leaderboard?${urlParams}`, success, failure);
}

// export const watchTrendingWords = (success, failure) => {
//   poll(`${BASE_URL}wordcloud?${getParams()}`, success, failure);
// }

// Depricated: Use pollPhotos instead
export const watchPhotos = (params, success, failure) => {
  let photoParams = qs.stringify({...params, contentType: 'photo'})
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
export const pollPhotos = (params, success, failure) => {
  let {ctag, filter} = params;
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

export const getPhotos = (params, success, failure) => {
  let photoParams = qs.stringify({...params, contentType: 'photo'})
  let url = `${PHOTO_URL}social?${photoParams}`;
  get(url, (data) => {
    removeBrokenMedia(data, (cleansedData) => {
      removeVideoMedia(cleansedData);
      let photoObjects = lodash.map(cleansedData, datum => new Photo(datum));
      success(photoObjects);
    })
  }, failure);
}

export const getLatestPhotos = (params, success, failure) => {
  let { ctag } = params;
  const allCtagsConfig = getCtagsConfig();
  const ctagConfig = allCtagsConfig[ctag];
  if(ctagConfig.sprinklrApi) {
    const { topicId } = params;
    const url = `${BASE_URL}sprinklr/phototweets?topicId=${topicId}`
    get(url, (data) => {
      const photoObjects = lodash.map(data, datum => new Photo(datum));
      success(photoObjects);
    })
  } else {
    getPhotos(params, success, failure);
  }
}

// Depricated: Use pollFeatured instead
export const watchFeatured = (params, success, failure) => {
  let urlParams = qs.stringify(params);
  let url = `${PHOTO_URL}social?${urlParams}`
  poll(url, success, failure);
}

let featuredFeed = new Feed();
export const pollFeatured = (params, success, failure) => {
  let urlParams = qs.stringify(params);
  let url = `${PHOTO_URL}social?${urlParams}`;
  poll(url, (data) => {
    removeBrokenMedia(data, (cleansedData) => {
      removeVideoMedia(cleansedData);
      featuredFeed.load(cleansedData);
      success(featuredFeed);
    })
  }, failure)
}

// export const watchTweetCount = (success, failure) => {
//   let url = `${BASE_URL}tweetcounter?${getParams()}`
//   poll(url, success, failure);
// }

export const watchVolume = (params, success, failure) => {
  let urlParams = qs.stringify({...params, groupBy: getGroupBy()})
  let url = `${BASE_URL}volume?${urlParams}`
  poll(url, success, failure, REFRESH_RATE*3)
}

export const watchSocial = (params, success, failure) => {
  let urlParams = qs.stringify(params)
  poll(`${PHOTO_URL}social?${urlParams}`, success, failure, REFRESH_RATE*5);
}

let TextTweetsFeed = new Feed();
export const pollTextTweets = (params, success, failure) => {
  let urlParams = qs.stringify(params);
  let url = `${PHOTO_URL}social?${urlParams}`;
  poll(url, (data) => {
    let textTweets = lodash.filter(data, d => {
      let embed = lodash.get(d, 'content.sections[0].embed');
      return embed && embed.type !== 'media';
    });
    TextTweetsFeed.load(textTweets);
    success(TextTweetsFeed);
  }, failure)
}

export const watchLeaderboard = (params, success, failure) => {
  let urlParams = qs.stringify(params);
  poll(`${BASE_URL}leaderboard?${urlParams}`, success, failure, REFRESH_RATE*2);
}

export const watchWordcloud = (params, success, failure) => {
  let urlParams = qs.stringify(params);
  poll(`${BASE_URL}wordcloud?${urlParams}`, success, failure, REFRESH_RATE*5);
}

export const getTweetStats = (params, success, failure) => {
  let {ctag} = params;
  let statParams = qs.stringify({ctag});
  let url = `${PHOTO_URL}social/aggregates?${statParams}`;
  get(url, success, failure);
}

export const getTopTweets = (params, success, failure) => {
  let {ctag} = params;
  let urlParams = qs.stringify({ctag, filter: "top"}),
      url = `${PHOTO_URL}social?${urlParams}`;
  get(url, success, failure);
}

export const getTopHashtags = (params, filterHashtags = [], success, failure) => {
  let {ctag} = params;
  let urlParams = qs.stringify({ctag}),
      url = `${BASE_URL}hashtags?${urlParams}`;
  get(url, (result) => {
    let filteredResult = lodash.filter(result, r => filterHashtags.indexOf(r.hashtag) === -1 )
    success(filteredResult)
  }, failure);
}
