import lodash from 'lodash';

export default class StatsData {

  constructor() {
    this.data = []
    this.currentIndex = 0
  }

  loadStats(stats) {
    this.data[0] = {
      type: 'stat',
      values: [
        {label: 'Tweets', count: stats['tweets'], icon: "/assets/clus2018/twitter.png"},
        {label: 'Likes', count: stats['likes'], icon: "/assets/clus2018/heart.png"},
        {label: 'Shares', count: stats['shares'], icon: "/assets/clus2018/retweet-bold.png"}
      ]
    }
    this.data[1] = {
      type: "stat",
      values: [
        {label: 'Tweeters', count: stats['authors'], icon: "/assets/clus2018/twitter.png"},
        {label: 'Images', count: stats['images'], icon: "/assets/clus2018/picture.png"},
        {label: 'Videos', count: stats['videos'], icon: "/assets/clus2018/play.png"}
      ]
    }
  }

  loadTopTweets(topTweets) {
    let tweets = topTweets.slice(0,2)
    this.data[3] = {
      type: "tweet",
      values: tweets
    }
  }

  loadTopHashtags(hashtags) {
    let topHashtags = hashtags.slice(0,3);
    let values = lodash.map(topHashtags, ht => { return {label: ht.hashtag, count: ht.count, icon: "/assets/clus2018/hashtag.png"} })
    this.data[2] = {
      type: "tag",
      values: values
    }
  }

  next() {
    this.currentIndex = (this.currentIndex+1) % this.data.length;
  }

  get() {
    return this.data[this.currentIndex];
  }

}

