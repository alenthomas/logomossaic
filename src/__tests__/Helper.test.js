import lodash from 'lodash';
import { generateGrid } from '../Helper.js';
import { buildDatum } from '../TestHelpers.js';
import Photo from '../models/Photo.js';

test('should return the grid metadata', () => {
  // Default window height is 1024 X 768 set by jest
  let photos = lodash.times(20).map(i => new Photo(buildDatum(`http://fankave.com/${i}.jpg`)));
  let grid = generateGrid(photos, 200, 200);
  expect(grid.length).toEqual(24);
  expect(grid[0]).toEqual({
    top: 0,
    left: 0,
    photo: photos[0]
  })
  expect(grid[23])
})

test('should return a blank array if there are no photos', () => {
  let grid = generateGrid([], 100, 100);
  expect(grid.length).toEqual(0);
})