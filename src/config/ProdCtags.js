import lodash from "lodash";

export default {
  "default": {
    "containerCssClassname": "default",
    "background": "linear-gradient(20deg, #364D9D, #308CC3)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/cisco/${lodash.random(1, 4)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/logo/it-cancun.png',
          "rightLogoUrl": '/assets/logo/ciscolive-cancun.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/fankave-cornered.png'
        },
      },
      "threecolumn": {
        "header": {
          "leftLogoUrl": '/assets/logo/it-cancun.png',
          "rightLogoUrl": '/assets/logo/ciscolive-cancun.png'
        },
        "footer": {
          "logoUrl": ''
        },
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" },
      "refreshrate": 10,
    },
    "horizontalstream": {
      "title": "#CiscoLiveLA",
      "refreshrate": 10,
    },
    "leaderboard": {
      "title": "#CiscoLiveLA",
      "refreshrate": 10,
    },
    "leaderboardv2": {
      "hideBgWave": true,
    },
    "masonarystream": {
      "title": "#CiscoLiveLA",
      "refreshrate": 10,
    },
    "masonarystreamv2": {
      "hideBgWave": true,
      "refreshrate": 10,
    },
    "masonarystreamv3": {
      "hideBgWave": true,
      "refreshrate": 10,
    },
    "masonarystreamv4": {
      "hideBgWave": true,
      "refreshrate": 10,
    },
    "mediacarousel": {
      "title": "Featured Content",
      "sides": 14,
      "cardDisplayTime": 10,
      "refreshrate": 10,
      "hideBgWave": false,
    },
    "photogrid": {
      "title": "Photo Grid",
      "refreshrate": 10,
    },
    "trendingdiscussion": {
      "title": "#CiscoLiveLA",
      "refreshrate": 10,
    },
    "leaderboardtile": {
      "title": "",
      "refreshrate": 10,
    },
    "photogridtile": {
      "title": "",
      "refreshrate": 10,
    },
    "mediacarouseltile": {
      "title": "",
      "refreshrate": 10,
    },
    "trendingcharttile": {
      "title": ""
    },
    "wordclouldtile": {
      "title": ""
    },
    "photowall": {
      "title": "#CiscoLiveLA",
      "tileBgText": "#CiscoLiveLA",
      "hideBgWave": true,
      "cardDisplayTime": 7,
      "initialLoadTime": 3,
      "interval": 3,
      "loadSequentially": false,
      "showFirst": 10,
      "refreshrate": 10
    },
    "marquee": {
      "count": 20,
      "refreshrate": 10,
    },
    "marqueeblue": {
      "count": 20,
      "refreshrate": 10,
    },
    "ticker": {
      "refreshrate": 10,
    },
    "polling": {
      "title": "TAP and Vote",
      "hideBgWave": true,
      "refreshrate": 250,
    },
    "pollingresults": {
      "title": "Winners",
      "refreshrate": 10,
    },
  },


  "basketball.na.usa:team=bos": {
    "containerCssClassname": "boston-celtics",
    "background": "url(/assets/celtics/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/celtics/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/celtics/leftLogo.png',
          "rightLogoUrl": '/assets/celtics/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "Celtics Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "Celtics Social Highlights"
    },
    "photogrid": {
      "title": "Celtics Visuals"
    },
    "trendingdiscussion": {
      "title": "Celtics Trending Topics"
    },
    "photowall": {
      "title": "Celtics Social Pulse",
      "tileBgText": "#CELTICS",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "nikebball": {
    "containerCssClassname": "nike",
    "background": "url(/assets/nike/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/nike/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/nike/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "Celtics Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "#nikebasketball Highlights"
    },
    "photogrid": {
      "title": "#nikebasketball Visuals"
    },
    "trendingdiscussion": {
      "title": "Celtics Trending Topics"
    },
    "photowall": {
      "title": "Nike Basketball Social Pulse",
      "tileBgText": "#nikebball",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "cisco.com:event=clus": {
    "containerCssClassname": "clus2019",
    "background": "url(/assets/clus2019/darkblue_bg1920.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/${lodash.random(1, 5)}.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/clus2019/leftLogo.png',
          "rightLogoUrl": '/assets/clus2019/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Daily Leaderboard"
    },
    "leaderboardv2": {
      "title": "Leaderboard",
      "hideBgWave": true,
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
      "refreshrate": 150,
    },
    "masonarystreamv3": {
      "title": "#CLUS Social Feed",
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "masonarystreamv4": {
      "title": "Social Feed",
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "mediacarousel": {
      "title": "#CLUS Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CLUS Trending Topics"
    },
    "photowall": {
      "title": "#CLUS Social Pulse",
      "tileBgText": "#CLUS",
      "hideBgWave": true,
      "loadSequentially": true,
      "showFirst": 100,
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "polling": {
      "title": "Vote Here !",
      "hideBgWave": true,
      "refreshrate": 250,
    },
    "pollingresults": {
      "title": "Top Winners",
      "refreshrate": 10,
      "hideBgWave": true
    },
  },

  "ciscostoreclus": {
    "containerCssClassname": "ciscostoreclus",
    "background": "url(/assets/clus2019/darkblue_bg1920.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/ar.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/ciscostore/leftLogo.png',
          "rightLogoUrl": '/assets/clus2019/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Leaderboard"
    },
    "leaderboardv2": {
      "hideBgWave": true,
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
      "refreshrate": 150,
    },
    "masonarystreamv3": {
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "masonarystreamv4": {
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "mediacarousel": {
      "title": "#CiscoStore Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CiscoStore Trending Topics"
    },
    "photowall": {
      "title": "#CiscoStore Social Pulse",
      "tileBgText": "#CLUS",
      "hideBgWave": true,
      "loadSequentially": true,
      "showFirst": 100,
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "polling": {
      "title": "Vote Here !",
      "hideBgWave": true
    },
    "pollingresults": {
      "title": "Top Winners",
      "hideBgWave": true
    },
  },

  "ciscoiotclus": {
    "containerCssClassname": "ciscoiotclus",
    "background": "url(/assets/clus2019/darkblue_bg1920.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/ciscoiotclus/1.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/clus2019/leftLogo.png',
          "rightLogoUrl": '/assets/clus2019/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "#CiscoIoT Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CLUS Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#CiscoIoT",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },


  "bethebridge": {
    "containerCssClassname": "clus2018",
    "background": "url(/assets/clus2018/blue-bubbles-bg.png)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '',
          "rightLogoUrl": '/assets/clus2019/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv3": {
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "masonarystreamv4": {
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "mediacarousel": {
      "title": "#BeTheBridge Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CLUS Trending Topics"
    },
    "photowall": {
      "title": "#BeTheBridge Social Pulse",
      "tileBgText": "#BeTheBridge",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "polling": {
      "title": "Vote !!",
      "hideBgWave": true
    },
    "pollingresults": {
      "title": "Top Winners",
      "hideBgWave": true
    },
  },

  "cisco.com:event=clus-ciscostore": {
    "containerCssClassname": "ciscostore",
    "background": "url(/assets/ciscostore/bg.png)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/ciscostore/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/ciscostore/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-blue.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "#CiscoStore Highlights"
    },
    "photogrid": {
      "title": "#CiscoStore Visuals"
    },
    "trendingdiscussion": {
      "title": "#CiscoStore Trending Topics"
    },
    "photowall": {
      "title": "#CiscoStore Social Pulse",
      "tileBgText": "#CiscoStore",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CiscoStore Social Stats",
      "hideBgWave": true
    }
  },

  "CiscoStore": {
    "containerCssClassname": "ciscostore",
    "background": "url(/assets/ciscostore/bg.png)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/ciscostore/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/ciscostore/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-blue.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "#CiscoStore Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CiscoStore Visuals"
    },
    "trendingdiscussion": {
      "title": "#CiscoStore Trending Topics"
    },
    "photowall": {
      "title": "#CiscoStore Social Pulse",
      "tileBgText": "#CiscoStore",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CiscoStore Social Stats",
      "hideBgWave": true
    }
  },



  "cisco.com:context=cxc": {
    "containerCssClassname": "clus2019",
    "background": "url(/assets/clus2019/darkblue_bg1920.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/${lodash.random(1, 5)}.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '',
          "rightLogoUrl": '/assets/clus2019/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "Social Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "Cisco CXC"
    },
    "photogrid": {
      "title": "Photos"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    },
    "photowall": {
      "title": "Cisco Social Pulse",
      "tileBgText": "#CISCOCXC",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "cisco.com:context=cxc-cisco-social": {
    "containerCssClassname": "clus2019",
    "background": "url(/assets/clus2019/darkblue_bg1920.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/${lodash.random(1, 5)}.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '',
          "rightLogoUrl": '/assets/clus2019/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "Social Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "Cisco CXC"
    },
    "photogrid": {
      "title": "Cisco Social Grid"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    },
    "photowall": {
      "title": "Cisco Social Pulse",
      "tileBgText": "#WEARECISCO",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "cisco.com:context=cxc-leaders": {
    "containerCssClassname": "clus2019",
    "background": "url(/assets/clus2019/darkblue_bg1920.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/${lodash.random(1, 5)}.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '',
          "rightLogoUrl": '/assets/clus2019/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "Social Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "Cisco Leaders"
    },
    "photogrid": {
      "title": "Cisco Social Grid"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    },
    "photowall": {
      "title": "Cisco Social Pulse",
      "tileBgText": "#CISCOCXC",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "cisco.com:context=cxc-products": {
    "containerCssClassname": "clus2019",
    "background": "url(/assets/clus2019/darkblue_bg1920.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/${lodash.random(1, 5)}.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '',
          "rightLogoUrl": '/assets/clus2019/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "Social Leaderboard"
    },
    "masonarystream": {
      "title": "Cisco Social Stream"
    },
    "mediacarousel": {
      "title": "Cisco Products"
    },
    "photogrid": {
      "title": "Cisco Social Grid"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    },
    "photowall": {
      "title": "Cisco Social Pulse",
      "tileBgText": "#CISCOCXC",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "freedomrvusa.com:context=socialwall": {
    "containerCssClassname": "freedomrvusa",
    "background": 'url("/assets/freedomrvusa/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/freedomrvusa/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '',
          "rightLogoUrl": '/assets/freedomrvusa/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "Social Leaderboard"
    },
    "masonarystream": {
      "title": "Cisco Social Stream"
    },
    "mediacarousel": {
      "title": "Freedom RV Social Wall"
    },
    "photogrid": {
      "title": "Freedom RV In Pictures"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    }
  },



  "nba.com:event=nba-allstar-all": {
    "containerCssClassname": "nba-allstar",
    "background": 'url("/assets/nba-allstar/bg.png") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/NBA/allstar1.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "rightLogoUrl": '/assets/nba-allstar/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "NBA All Star"
    },
    "leaderboard": {
      "title": "NBA All Star"
    },
    "masonarystream": {
      "title": "NBA All Star"
    },
    "mediacarousel": {
      "title": "SFL Trending Now"
    },
    "photogrid": {
      "title": "SFL In Photos"
    },
    "trendingdiscussion": {
      "title": "NBA All Star"
    },
    "leaderboardtile": {
      "title": ""
    },
    "photogridtile": {
      "title": ""
    },
    "trendingcharttile": {
      "title": ""
    },
    "wordclouldtile": {
      "title": ""
    }
  },

  "bayclub.com:context=socialwall": {
    "containerCssClassname": "bayclub",
    "background": "url(/assets/bayclub/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/bayclub/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/bayclub/leftLogo.jpg',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "#BayClubHappy Love Wall"
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#BayClubHappy Trending Topics"
    },
    "photowall": {
      "title": "#BayClubHappy Social Pulse",
      "tileBgText": "#BayClubHappy",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "linkedinpinot": {
    "containerCssClassname": "linkedin",
    "background": "url(/assets/linkedin/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/linkedin/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/linkedin/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "#superchargedOLAP Highlights"
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#superchargedOLAP Trending Topics"
    },
    "photowall": {
      "title": "#superchargedOLAP Social Pulse",
      "tileBgText": "#superchargedOLAP",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "tiecon2019": {
    "containerCssClassname": "tiecon",
    "background": "url(/assets/tiecon/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/tiecon/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/tiecon/loading_vertical.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/tiecon/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#TiEcon Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "#TiEcon Highlights"
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#TiEcon Trending Topics"
    },
    "photowall": {
      "title": "#TiEcon Social Pulse",
      "tileBgText": "#TiEcon",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "clussun1": {
    "containerCssClassname": "clus2019",
    "background": "url(/assets/clus2019/darkblue_bg1920.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/${lodash.random(1, 5)}.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/clus2019/leftLogo.png',
          "rightLogoUrl": '/assets/clus2019/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "polling": {
      "title": "TAP to Vote!",
      "hideBgWave": true,
      "refreshrate": 150,
    },
    "pollingresults": {
      "refreshrate": 10,
    },
  },

  "dell.com:context=ebc-sv": {
    "containerCssClassname": "dellebc-sv",
    "background": "url(/assets/dell/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/dell/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/dell/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Daily Leaderboard"
    },
    "leaderboardv2": {
      "title": "Leaderboard",
      "hideBgWave": true,
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
      "refreshrate": 150,
    },
    "masonarystreamv3": {
      "title": "#CLUS Social Feed",
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "masonarystreamv4": {
      "title": "Social Feed",
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "mediacarousel": {
      "title": "Dell Leaders",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CLUS Trending Topics"
    },
    "photowall": {
      "title": "Dell Social Pulse",
      "tileBgText": "#Dell4Impact",
      "hideBgWave": true,
      "loadSequentially": true,
      "showFirst": 100,
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "polling": {
      "title": "Vote Here !",
      "hideBgWave": true,
      "refreshrate": 250,
    },
    "pollingresults": {
      "title": "Top Winners",
      "refreshrate": 10,
      "hideBgWave": true
    },
  },

  "herbalifebooth": {
    "containerCssClassname": "herbalifebooth",
    "background": "url(/assets/herbalifebooth/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/herbalifebooth/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/herbalifebooth/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": ''
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Daily Leaderboard"
    },
    "leaderboardv2": {
      "title": "Leaderboard",
      "hideBgWave": true,
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
      "refreshrate": 150,
    },
    "masonarystreamv3": {
      "title": "#CLUS Social Feed",
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "masonarystreamv4": {
      "title": "Social Feed",
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "mediacarousel": {
      "title": "#Herbalife Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#Herbalife Trending Topics"
    },
    "photowall": {
      "title": "#Herbalife Social Pulse",
      "tileBgText": "#Herbalife",
      "hideBgWave": true,
      "loadSequentially": true,
      "showFirst": 100,
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "polling": {
      "title": "Vote Here !",
      "hideBgWave": true,
      "refreshrate": 250,
    },
    "pollingresults": {
      "title": "Top Winners",
      "refreshrate": 10,
      "hideBgWave": true
    },
  },

  "fankave.com:context=test": {
    "containerCssClassname": "clus2019",
    "background": "url(/assets/clus2019/darkblue_bg1920.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/${lodash.random(1, 5)}.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "Social Feed"
    },
    "leaderboard": {
      "title": "#CLUS Daily Leaderboard"
    },
    "leaderboardv2": {
      "title": "Leaderboard",
      "hideBgWave": true,
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
      "refreshrate": 150,
    },
    "masonarystreamv3": {
      "title": "#CLUS Social Feed",
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "masonarystreamv4": {
      "title": "Social Feed",
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "mediacarousel": {
      "title": "#BizBashLA Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#BizBashLA Trending Topics"
    },
    "photowall": {
      "title": "#BizBashLA Social Pulse",
      "tileBgText": "#BizBashLA",
      "hideBgWave": true,
      "loadSequentially": true,
      "showFirst": 100,
    },
    "tweetcounts": {
      "title": "#CLUS So",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "polling": {
      "title": "Vote Here !",
      "hideBgWave": true,
      "refreshrate": 250,
    },
    "pollingresults": {
      "title": "Top Winners",
      "refreshrate": 10,
      "hideBgWave": true
    },
  },

}
