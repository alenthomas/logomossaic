import {buildDatum} from '../TestHelpers.js';
import {pollFeatured, getTopHashtags} from '../Services.js';
import { handleError } from '../Helper.js';

test('pollFeatured | should cleanse data and return a feed object', (done) => {
  let data = [buildDatum(), buildDatum(), buildDatum()];
  let params = {ctag: 'cisco', filter: 'featured'}
  let REFRESH_RATE = 5;
  fetch.mockResponses([JSON.stringify(data)]);

  pollFeatured((feed) => {
    expect(feed.getAll()).toEqual(data)
    expect(feed.getAdded()).toEqual(data)
    expect(feed.getRemoved()).toEqual([])
    done()
  }, handleError, params.ctag, params.filter, REFRESH_RATE * 1000);
})


test('getTopHashtags | should filter and return the top hashtags', (done) => {
  let param = {ctag: 'cisco'}
  let tag1 = {hashtag: 'clus', count: 10},
      tag2 = {hashtag: 'abc', count: 20},
      tag3 = {hashtag: 'def', count: 30};
  fetch.mockResponses([JSON.stringify([tag1, tag2, tag3])])

  getTopHashtags(param.ctag, [tag2.hashtag], (results) => {
    expect(results).toEqual([tag1, tag3])
    done()
  })
})