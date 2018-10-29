import StatsData from '../StatsData.js';
import {buildDatum} from '../../../TestHelpers.js';

test('should transform the data for easy visualizing', () => {
  let statsCount = {
    tweets: 50,
    likes: 60,
    shares: 70,
    authors: 10,
    images: 20,
    videos: 30
  }
  let tweet1 = buildDatum(), 
      tweet2 = buildDatum(), 
      tweet3 = buildDatum();
  let topTweets = [tweet1, tweet2, tweet3]
  let hashtags = [
    {hashtag: 'clus', count: 90},
    {hashtag: 'cisco', count: 80},
    {hashtag: 'rocks', count: 10},
    {hashtag: 'csome', count: 5}
  ]

  let expected = [
    {
      type: "stat",
      values: [
        {label: 'Tweets', count: 50, icon: "/assets/clus2018/twitter.png"},
        {label: 'Likes', count: 60, icon: "/assets/clus2018/heart.png"},
        {label: 'Shares', count: 70, icon: "/assets/clus2018/retweet-bold.png"}
      ]
    },
    {
      type: "stat",
      values: [
        {label: 'Tweeters', count: 10, icon: "/assets/clus2018/twitter.png"},
        {label: 'Images', count: 20, icon: "/assets/clus2018/picture.png"},
        {label: 'Videos', count: 30, icon: "/assets/clus2018/play.png"}
      ]
    },
    {
      type: "tag",
      values: [
        {label: 'clus', count: 90, icon: "/assets/clus2018/hashtag.png"},
        {label: 'cisco', count: 80, icon: "/assets/clus2018/hashtag.png"},
        {label: 'rocks', count: 10, icon: "/assets/clus2018/hashtag.png"}
      ]
    },
    {
      type: "tweet",
      values: [ tweet1, tweet2 ]
    }
  ]
  let statsData = new StatsData()
  statsData.loadStats(statsCount)
  statsData.loadTopTweets(topTweets)
  statsData.loadTopHashtags(hashtags)
  
  expect(statsData.get()).toEqual(expected[0]);
  statsData.next()
  expect(statsData.get()).toEqual(expected[1]);
  statsData.next()
  expect(statsData.get()).toEqual(expected[2]);
  statsData.next()
  expect(statsData.get()).toEqual(expected[3]);
  // should cycle through the data
  statsData.next()
  expect(statsData.get()).toEqual(expected[0]);
})