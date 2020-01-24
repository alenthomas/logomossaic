import qs from 'qs';
import lodash from 'lodash';
import { getGroupBy } from './Helper.js'
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
const POLL_URL = API_CONFIG.POLL_URL;
const NAME_URL = API_CONFIG.NAME_URL;
const REFRESH_RATE = 5000;
const FAILURE_RETRY_RATE = 10000;

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

export const watchLeaderboardInfo = (success, failure, ctag, filter, refreshRate = 5) => {
  let urlParams = qs.stringify({ctag, filter});
  poll(`${BASE_URL}leaderboard?${urlParams}`, success, failure, refreshRate * 1000);
}


// Depricated: Use pollPhotos instead
export const watchPhotos = (success, failure, ctag, filter, refreshRate = 5) => {
  let photoParams = qs.stringify({ctag, filter, contentType: 'photo', format: 'flat'})
  let url = `${PHOTO_URL}social?${photoParams}`;
  let massage = (payload) => {
    let photos = lodash(payload)
      .filter("media")
      .map((datum) => new Photo(datum).transform())
      .filter("photoSize")
      .value();
    success(photos);
  }
  poll(url, massage, failure, refreshRate * 1000);
}

let photosFeed = new Feed();
export const pollPhotos = (ctag, filter, success, failure) => {
  let photoParams = qs.stringify({ctag, filter, contentType: 'photo', format: 'flat'})
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

export const getPhotos = (ctag, filter, success, failure) => {
  let photoParams = qs.stringify({ctag, filter, contentType: 'photo', format: 'flat'})
  let url = `${PHOTO_URL}social?${photoParams}`;
  get(url, (data) => {
    removeBrokenMedia(data, (cleansedData) => {
      removeVideoMedia(cleansedData);
      let photoObjects = lodash.map(cleansedData, datum => new Photo(datum));
      success(photoObjects);
    })
  }, failure);
}

export const getPhotosPoll = (ctag, filter, success, failure, refreshRate, safe=true) => {
  let photoParams = qs.stringify({ctag, filter, contentType: 'photo', format: 'flat'});
  let url = `${PHOTO_URL}social?${photoParams}`;
  poll(url, (data) => {
    removeBrokenMedia(data, (cleansedData) => {
      removeVideoMedia(cleansedData);
      let photoObjects = lodash.map(cleansedData, datum => new Photo(datum));
      success(photoObjects);
    })
  }, failure, refreshRate * 1000);
}



export const getLatestPhotos = (ctag, filter, topicId, success, failure) => {
  const allCtagsConfig = getCtagsConfig();
  const ctagConfig = allCtagsConfig[ctag];
  if(ctagConfig.sprinklrApi) {
    const url = `${BASE_URL}sprinklr/phototweets?topicId=${topicId}`
    get(url, (data) => {
      const photoPosts = lodash.filter(data, datum => datum.media && datum.media.length > 0 && datum.media[0].url);
      const photoObjects = lodash.map(photoPosts, datum => new Photo(datum));
      success(photoObjects);
    })
  } else {
    getPhotos(ctag, filter, success, failure);
  }
}

// Depricated: Use pollFeatured instead
export const watchFeatured = (success, failure, ctag, filter, refreshRate = 5) => {
  let urlParams = qs.stringify({ctag, filter, format: 'flat'});
  let url = `${PHOTO_URL}social?${urlParams}`
  poll(url, success, failure, refreshRate * 1000);
}

let featuredFeed = new Feed();
export const pollFeatured = (success, failure, ctag, filter, refreshRate = 5) => {
  let urlParams = qs.stringify({ctag, filter, format: 'flat'});
  let url = `${PHOTO_URL}social?${urlParams}`;
  poll(url, (data) => {
    removeBrokenMedia(data, (cleansedData) => {
      removeVideoMedia(cleansedData);
      featuredFeed.load(cleansedData);
      success(featuredFeed);
    })
  }, failure, refreshRate * 1000);
}

export const pollFeaturedSprinklr = (success, failure, topicId) => {
  let featuredFeed = new Feed();
  const url = `${BASE_URL}sprinklr/phototweets?topicId=${topicId}`
  get(url, (data) => {
    const photoPosts = lodash.filter(data, datum => datum.media && datum.media.length > 0 && datum.media[0].url);
    const photoObjects = lodash.map(photoPosts, datum => {
      datum.media[0].mediaType='image'
      datum['source'] = {name: ''};
      datum['createdAt'] = new Date(datum.createdAt).toISOString();
      return datum;
      }
      );
    featuredFeed.load(photoObjects)
    success(featuredFeed);
    }, failure)
}

export const watchVolume = (success, failure, ctag, filter, refreshRate = 5) => {
  let urlParams = qs.stringify({ctag, filter, groupBy: getGroupBy()})
  let url = `${BASE_URL}volume?${urlParams}`
  poll(url, success, failure, refreshRate * 1000);
}

export const watchSocial = (success, failure, ctag, filter, limit = null, refreshRate = 25) => {
  let urlParams = qs.stringify({ctag, filter, limit, format: 'flat'}, {skipNulls: true});
  poll(`${PHOTO_URL}social?${urlParams}`, success, failure, refreshRate * 1000);
}

let TextTweetsFeed = new Feed();
export const pollTextTweets = (success, failure, ctag, filter, refreshRate = 5) => {
  let urlParams = qs.stringify({ctag, filter, format: 'flat'});
  let url = `${PHOTO_URL}social?${urlParams}`;
  poll(url, (data) => {
    let textTweets = lodash.filter(data, embed => {
      return embed && embed.type === 'text';
    });
    TextTweetsFeed.load(textTweets);
    success(TextTweetsFeed);
  }, failure, refreshRate * 1000);
}

export const watchLeaderboard = (success, failure, ctag, filter, refreshRate = 5, limit) => {
  let urlParams = qs.stringify({ctag, filter, limit});
  poll(`${BASE_URL}leaderboard?${urlParams}`, success, failure, refreshRate * 1000);
}

export const watchCluster = (success, failure, ctag, filter, refreshRate = 5, limit) => {
  let urlParams = qs.stringify({ctag, filter, limit});
  poll(`${BASE_URL}social?${urlParams}&contentType=photo&format=flat`, success, failure, refreshRate * 1000);
}

export const watchWordcloud = (success, failure, ctag, filter, refreshRate = 5) => {
  let urlParams = qs.stringify({ctag, filter});
  poll(`${BASE_URL}wordcloud?${urlParams}`, success, failure, refreshRate * 1000);
}

export const watchGeneralAgenda = (success, failure, refreshRate = 10) => {
  poll(`${BASE_URL}agenda/cancun/general`, success, failure, refreshRate * 1000);
}

export const watchEventAgenda = (success, failure, refreshRate = 10) => {
  poll(`${BASE_URL}agenda/cancun/all`, success, failure, refreshRate * 1000);
}

export const getTweetStats = (ctag, success, failure) => {
  let statParams = qs.stringify({ctag});
  let url = `${PHOTO_URL}social/aggregates?${statParams}`;
  get(url, success, failure);
}

export const getTopTweets = (ctag, success, failure) => {
  let urlParams = qs.stringify({ctag, filter: 'top', format: 'flat'}),
      url = `${PHOTO_URL}social?${urlParams}`;
  get(url, success, failure);
}

export const getTopHashtags = (ctag, filterHashtags = [], success, failure) => {
  let urlParams = qs.stringify({ctag}),
      url = `${BASE_URL}hashtags?${urlParams}`;
  get(url, (result) => {
    let filteredResult = lodash.filter(result, r => filterHashtags.indexOf(r.hashtag) === -1 )
    success(filteredResult)
  }, failure);
}

export const getResults = (ctag, success, failure) => {
  return get(`${POLL_URL}/getContest?contest=${ctag}`, success, failure);
}

export const pollResults = (ctag, refreshRate, success, failure) => {
  return poll(`${POLL_URL}/getContest?contest=${ctag}`, success, failure, refreshRate * 1000);
}

export const getVotes = (id, success, failure) => {
  return get(`${POLL_URL}/getPoll?id=${id}`, success, failure);
}

export const postVotes = (id, ctag, src, meta, success, failure) => {
  return fetch(`${POLL_URL}/addPoll`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({"id": id, "contest": ctag, "src": src, "meta": meta})
  })
  .then((response) => response.json())
  .then(
    payload => success(payload),
    error => failure(error)
  )
}

export const getName = (success, failure) => {
  return get(`${NAME_URL}/getName?json=true`, success, failure);
}

export const getLeaders = (success, failure, refreshRate = 25) => {
  return poll(`${BASE_URL}qrcode/all?filter=name`, success, failure, refreshRate * 1000);
}