import lodash from 'lodash';
import { parseEmoji } from '../../Helper'
import Photo from '../../models/Photo.js';

const urlRegexp = /(?:https?|ftp):\/\/[\n\S]+/g;

export function findCardType(data) {
  if(data && data.type !== 'media') {
    return 'text';
  }

  let photo = new Photo(data);
  return photo.isLandscape() ? 'landscape' : 'portrait';
};

export function hasVideoMedia(data) {
  return lodash.get(data, 'playable', false);
}


export function getMediaUrl(embed) {
  if(embed.type === "media") {
    return embed.media[0].url;
  }

  return false;
};

export function getThumbNailUrl(embed) {
  if(embed.media && embed.media[0] && embed.media[0].thumbUrl) {
    return embed.media[0].thumbUrl;
  }
  if(embed.media && embed.media[0] && embed.media[0].url) {
    return embed.media[0].url // fallback url
  }
  return false;
}

export function getCreatedAt(data) {
  return new Date(Date.parse(lodash.get(data, 'createdAt')));
}

//https://stackoverflow.com/questions/17633462/format-a-javascript-number-with-a-metric-prefix-like-1-5k-1m-1g-etc
let ranges = [
  { divider: 1e18 , suffix: 'P' },
  { divider: 1e15 , suffix: 'E' },
  { divider: 1e12 , suffix: 'T' },
  { divider: 1e9 , suffix: 'G' },
  { divider: 1e6 , suffix: 'M' },
  { divider: 1e3 , suffix: 'k' }
];

export function formatNumber(n) {
  for (var i = 0; i < ranges.length; i++) {
    if (n >= ranges[i].divider) {
      var roundedQuotient = Math.round((n / ranges[i].divider) * 10) / 10;
      return roundedQuotient.toString() + ranges[i].suffix;
    }
  }
  return n.toString();
}

export function removeLinks(text) {
  return (text || "").replace(urlRegexp, '');
}

export function sanitizeText(text) {
  return parseEmoji(removeLinks(text))
}