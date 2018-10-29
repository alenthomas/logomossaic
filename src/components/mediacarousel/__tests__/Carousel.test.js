import lodash from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';
import Carousel, {CARD_SWAP_OFFSET} from '../Carousel.js';
import Feed from '../../../dataservices/Feed.js';
import {buildDatum} from '../../../TestHelpers.js';

test('should remove tile marked for delete from the tiles list', () => {
  let feed = new Feed();
  let tweet1 = buildDatum(),
      tweet2 = buildDatum(),
      tweet3 = buildDatum(),
      tweetToBeDeleted = buildDatum();
  let data = [tweet1, tweetToBeDeleted, tweet2, tweet3];
  feed.load(data);

  const rndr = renderer.create(
    <Carousel feed={feed}/>
  )
  const carousel = rndr.getInstance();
  expect(carousel.state.currentCards.length).toBe(4);
  expect(carousel.state.cardsToAdd.length).toBe(0);
  expect(carousel.state.cardsToRemove.length).toBe(0);

  //Rotate CARD_SWAP_OFFSET times to enable the card swap logic
  lodash.times(CARD_SWAP_OFFSET, () => {
    carousel.rotate();
  })

  let newData = [tweet1, tweet2, tweet3, buildDatum()];
  feed.load(newData);
  carousel.componentWillReceiveProps({feed: feed});
  carousel.rotate();
  expect(carousel.state.cardsToRemove.length).toBe(1);
  carousel.rotate();
  expect(carousel.state.cardsToRemove.length).toBe(0);
})
