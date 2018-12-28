# Digital Signage (Formerly 'Animable')

React app built to run in wall displays to show the content for different experiences

## List of experiences

* Leaderboard
  * http://dev.fankave.com/dsd/#/leaderboard?ctag=CiscoStore&filter=approved
* Volumes
  * http://dev.fankave.com/dsd/#/volume?ctag=CiscoStore&filter=approved
* Trending
  * http://dev.fankave.com/dsd/#/trending?ctag=CiscoStore&filter=approved
* Carousel

  There are two variants
  * Cube view : http://dev.fankave.com/dsd/#/carousel?ctag=netflix.com:context=ebc&filter=featured&type=cube
  * Carousel view : http://dev.fankave.com/dsd/#/carousel?ctag=netflix.com:context=ebc&filter=featured
      - Carousel takes two values from config
      - `sides`: is the number of posts to display
      - `cardDisplayTime`: is the number of seconds a post is displayed before moving on to the next
      - by default `type=cube` displays 4 posts

* Photogrid
  * http://dev.fankave.com/dsd/#/photogrid?ctag=CiscoStore&filter=approved
* Photogrid Fill View
  * http://dev.fankave.com/photogridFill?ctag=CiscoStore&filter=approved
* Horizontal Stream
  * http://dev.fankave.com/dsd/#/hstream?ctag=CiscoStore&filter=approved
* Masonry Stream
  * http://dev.fankave.com/dsd/#/mstream?ctag=CiscoStore&filter=approved
* Marquee
  * http://dev.fankave.com/dsd/#/marquee?ctag=CiscoStore&filter=approved
      - Marquee takes one value from config
      - `count`: is the number of posts to be displayed
* MarqueeBlue
  * http://dev.fankave.com/dsd/#/marqueeBlue?ctag=CiscoStore&filter=approved
      - MarqueeBlue takes one value from config
      - `count`: is the number of posts to be displayed
* Capsule
  * http://dev.fankave.com/dsd/#/capsule?ctag=CiscoStore&filter=approved
* Grid View
  * http://dev.fankave.com/dsd/#/gridview?ctag=CiscoStore&filter=approved
* Photowall
  * http://dev.fankave.com/dsd/#/photowall?ctag=CiscoStore&filter=approved
      - PhotoWall takes one value from config
      - `cardDisplayTime`: is the number of seconds a photo is featured/highlighed before moving on to the next
* Twitter Stats View
  * http://dev.fankave.com/dsd/#/counter?ctag=CiscoStore&filter=approved
* Ticker View
  * http://dev.fankave.com/dsd/#/ticker?ctag=CiscoStore&filter=approved

** API polling rate to get new data is also loaded from config under `refreshrate` in seconds, based on this individual experiences poll for new data


## Dev notes

This app is build with create react app (see create-react-app-readme.md for more details)