import Feed from '../Feed.js';

test('should calculate deltas appropriately', () => {
  let feed = new Feed()
  let dataSet1 = [{id: 1}, {id: 2}, {id: 4}, {id: 5}]
  let dataSet2 = [{id: 2}, {id: 4}, {id: 5}, {id: 6}]
  
  feed.load(dataSet1)
  expect(feed.getAll()).toEqual(dataSet1)
  expect(feed.getAdded()).toEqual(dataSet1)
  expect(feed.getRemoved()).toEqual([])
  
  feed.load(dataSet2)
  expect(feed.getAll()).toEqual(dataSet2)
  expect(feed.getAdded()).toEqual([{id:6}])
  expect(feed.getRemoved()).toEqual([{id: 1}])
})

test('should be able to have multiple feeds', () => {
  let feed1 = new Feed()
  let feed2 = new Feed()
  let dataSet1 = [{id: 1}, {id: 2}, {id: 4}, {id: 5}]
  
  feed1.load(dataSet1)
  expect(feed1.getAll()).toEqual(dataSet1)
  expect(feed1.getAdded()).toEqual(dataSet1)
  expect(feed2.getAll()).toEqual([])
  expect(feed2.getAdded()).toEqual([])
})