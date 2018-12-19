export const buildDatum = (url = 'http://twitter.com/awer2344', type = 'image') => {
  let datum = {
    id: Math.random(),
    author: {},
    source: {
      name: 'Twitter'
    },
    type: type,
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

  if (type === 'text') {
    delete datum.media
  }
  return datum
}