import lodash from 'lodash';


function isNonMediaData(datum) {
  return datum.type !== 'media';
}

export const protoRelativeUrl = (url) => {
  return location.protocol+url.replace(/^https?:/i, "")
}

export const removeBrokenMedia = (data, done) => {
  let groupedData = lodash.groupBy(data, d => isNonMediaData(d))
  let valid = groupedData.true || []
  let mediaData = groupedData.false || []

  let urlPromises = mediaData.map((d) => {
    let mediaUrl = d.media[0].url;
    return fetch(protoRelativeUrl(mediaUrl), { method: 'HEAD' })
//    return fetch(mediaUrl, { method: 'HEAD' })
  })

  Promise.all(urlPromises).then((responses) => {
    responses.forEach((response,i) => {
      if(response.status === 200) {
        valid.push(mediaData[i]);
      }
    })
    valid = lodash.orderBy(valid, 'createdAt', 'desc');
    done(valid)
  })
}

export const removeVideoMedia = (data) => {
  lodash.remove(data, (d) => lodash.get(d, 'playable', false));
}
