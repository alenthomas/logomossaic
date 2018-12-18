import {buildDatum} from '../../TestHelpers.js';
import {removeBrokenMedia, removeVideoMedia} from '../DataFilters.js';

test('removeBrokenMedia | should loop through all the media urls and remove the ones which are not found', (done) => {
  let data = [ buildDatum(), buildDatum(), buildDatum() ]
  fetch.mockResponses(
    ['', {status: 200}],
    ['', {status: 404}],
    ['', {status: 200}]
  )

  removeBrokenMedia(data, (cleanedData) => {
    expect(cleanedData).toEqual([data[0], data[2]])
    done()
  })
})

test('removeBrokenMedia | Should not filter any non media content', () => {
  let data = [buildDatum('http://test', false, 'text')]

  removeBrokenMedia(data, (cleanedData) => {
    expect(cleanedData).toEqual(data)
  })
})

test('removeVideoMedia | should remove the video content', () => {
  let data = [
    buildDatum('http://test1'),
    buildDatum('http://test2'),
    buildDatum('http://test3', true),
    buildDatum('http://test4')
  ]

  removeVideoMedia(data)
  expect(data.map(d => d.media[0].url)).toEqual([
    'http://test1', 'http://test2', 'http://test4'
  ])
})
