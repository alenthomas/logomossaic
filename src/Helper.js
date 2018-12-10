import lodash from 'lodash';
import qs from 'qs';
import twemoji from 'twemoji';

const urlRegexp = /(?:https?|ftp):\/\/[\n\S]+/g;

const DEFAULT_CTAG = "cisco.com:group=ciscolive";
const DEFAULT_GROUP_BY = "day";

export function queryString(queryStringDefaults = {}) {
  let location = window.location.href.split("?")[1] || "";
  location = location.replace(/\?/, '');

  queryStringDefaults.ctag = DEFAULT_CTAG;
  const queryStringParsed = qs.parse(location);

  return lodash.merge(queryStringDefaults, queryStringParsed);
}

export function getGroupBy() {
  const { groupBy } = queryString();
  return groupBy || DEFAULT_GROUP_BY;
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function generateGrid(photos, tileWidth, tileHeight) {
  if(photos.length === 0) {
    return []
  }

  let columns = Math.ceil(window.innerWidth / tileWidth),
      rows = Math.ceil(window.innerHeight / tileHeight),
      totalTiles = rows * columns;
  let tilesMetadata = [];

  lodash.times(totalTiles, (i) => {
    let photo = photos[i % photos.length];
    tilesMetadata.push({
      left: (i % columns) * tileWidth,
      top: Math.floor(i / columns) * tileHeight,
      photo: photo
    })
  })
  return tilesMetadata;
}

export function parseEmoji(string) {
  return twemoji.parse(string);
}

export function removeLinks(text) {
  return (text || "").replace(urlRegexp, '');
}

export function handleError(error) {
  console.error(error);
}