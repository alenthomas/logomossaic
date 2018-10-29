export const buildDatum = (url = 'http://twitter.com/awer2344', playable = false, type = 'media') => {
  let datum = {
    id: Math.random(),
    content: {
      sections: [
        { 
          embed: {
            type: type,
            playable: playable,
            author: {},
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
        }
      ]
    },
    source: {
      type: 'twitter'
    }
  }
  if (type != 'media') {
    delete datum.content.sections[0].embed.media
  }
  return datum
}