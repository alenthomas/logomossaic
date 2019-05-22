import lodash from 'lodash';


function isNonMediaData(datum) {
  return datum.type === 'text';
}

export const protoRelativeUrl = (url) => {
  return location.protocol+url.replace(/^https?:/i, "")
}

export const removeBrokenMedia = (data, done, safe=true) => {
  let groupedData = lodash.groupBy(data, d => isNonMediaData(d))
  let valid = groupedData.true || []
  let mediaData = groupedData.false || []

  let urlPromises = mediaData.map((d) => {
    let mediaUrl = d.media[0].url;
    if(safe) {
      return fetch(protoRelativeUrl(mediaUrl), { method: 'HEAD' })
    } else if(!safe) {
      return fetch(mediaUrl, { method: 'HEAD' })
    }
    return fetch(protoRelativeUrl(mediaUrl), { method: 'HEAD' })
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
  .catch(err => {
    console.error(`Error: ${err}`);
    done(valid);
  });
}

export const removeVideoMedia = (data) => {
  lodash.remove(data, (d) => d.type === 'video');
}
