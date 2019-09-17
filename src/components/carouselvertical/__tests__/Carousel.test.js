import lodash from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';
import VerticalCarousel, {CARD_SWAP_OFFSET} from '../VerticalCarousel';
import Feed from '../../../dataservices/Feed.js';
import {buildDatum} from '../../../TestHelpers.js';
import { default as devCtags } from '../../../config/DevCtags.js';

test('should remove tile marked for delete from the tiles list', () => {
  let feed = new Feed();
  let tweet1 = buildDatum(),
      tweet2 = buildDatum(),
      tweet3 = buildDatum(),
      tweetToBeDeleted = buildDatum();
  let data = [tweet1, tweetToBeDeleted, tweet2, tweet3];
  const { verticalcarousel: componentConfig } = devCtags.default;

  feed.load(data);

  const rndr = renderer.create(
    <VerticalCarousel feed={feed} componentConfig={componentConfig}/>
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
