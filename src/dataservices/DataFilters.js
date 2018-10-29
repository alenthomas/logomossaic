import lodash from 'lodash';


function isNonMediaData(datum) {
  return datum.content.sections[0].embed.type !== 'media';
}

export const removeBrokenMedia = (data, done) => {
  let groupedData = lodash.groupBy(data, d => isNonMediaData(d))
  let valid = groupedData.true || []
  let mediaData = groupedData.false || []

  let urlPromises = mediaData.map((d) => {
    let mediaUrl = d.content.sections[0].embed.media[0].url;
    return fetch(protoRelativeUrl(mediaUrl), { method: 'HEAD' })
//    return fetch(mediaUrl, { method: 'HEAD' })
  })

  Promise.all(urlPromises).then((responses) => {
    responses.forEach((response,i) => {
      if(response.status === 200) {
        valid.push(mediaData[i]);
      }
    })
    valid = lodash.orderBy(valid, 'content.sections[0].embed.createdAt', 'desc');
    done(valid)
  })
}

export const protoRelativeUrl = (url) => {
  return location.protocol+url.replace(/^https?:/i, "")
}

export const removeVideoMedia = (data) => {
  lodash.remove(data, (d) => lodash.get(d, 'content.sections[0].embed.playable', false));
}
