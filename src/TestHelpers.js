export const buildDatum = (url = 'http://twitter.com/awer2344', playable = false, type = 'media') => {
  let datum = {
    id: Math.random(),
    author: {},
    source: {
      name: 'Twitter'
    },
    type: type,
    playable: playable,
    createdAt: new Date().toString(),
    media: [
      {
        url: url,
        mediaType: 'image',
        sizes: {
          full: {w: 498, h: 198}
        }
      }
    ]
  }

  if (type != 'media') {
    delete datum.media
  }
  return datum
}