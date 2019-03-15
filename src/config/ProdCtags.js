import lodash from "lodash";

export default {
  "default": {
    "containerCssClassname": "default",
    "background": "linear-gradient(20deg, #364D9D, #308CC3)",
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/cisco/${lodash.random(1, 4)}.mp4`
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
    "masonarystream": {
      "title": "#CiscoLiveLA",
      "refreshrate": 10,
    },
    "mediacarousel": {
      "title": "Featured Content",
      "sides": 14,
      "cardDisplayTime": 10,
      "refreshrate": 10,
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
    }
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
    "containerCssClassname": "clus2018",
    "background": "url(/assets/clus2018/blue-bubbles-bg.png)",
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/cisco-live/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/clus2018/cancun.png',
          "rightLogoUrl": 'https://storage.googleapis.com/animable/cisco-live/clus-imagine.gif'
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
      "title": "#CiscoLiveLA Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CLUS Trending Topics"
    },
    "photowall": {
      "title": "#CLEUR Social Pulse",
      "tileBgText": "#CLEUR",
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
      "url": () => `https://storage.googleapis.com/animable/cisco-live/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '',
          "rightLogoUrl": '/assets/logo/cisco.png'
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
    }
  },

  "cisco.com:event=clus-ciscostore": {
    "containerCssClassname": "ciscostore",
    "background": "url(/assets/ciscostore/bg.png)",
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/ciscostore/loading.mp4`
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
      "url": () => `https://storage.googleapis.com/animable/ciscostore/loading.mp4`
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

  
 
  "cisco.com:context=cxc": {
    "containerCssClassname": "cisco-cxc",
    "background": "url(/assets/cisco-cxc/blue-bubbles-bg.png)",
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/cisco-cxc/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cisco-cxc/cisco-vision.png',
          "rightLogoUrl": 'https://storage.googleapis.com/animable/cisco-cxc/clus-imagine.gif'
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
    "containerCssClassname": "cisco-cxc",
    "background": "url(/assets/cisco-cxc/blue-bubbles-bg.png)",
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/cisco-cxc/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cisco-cxc/cisco-vision.png',
          "rightLogoUrl": 'https://storage.googleapis.com/animable/cisco-cxc/clus-imagine.gif'
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
      "tileBgText": "#CISCOCXC",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "cisco.com:context=cxc-leaders": {
    "containerCssClassname": "cisco-cxc",
    "background": "url(/assets/cisco-cxc/blue-bubbles-bg.png)",
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/cisco-cxc/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cisco-cxc/cisco-vision.png',
          "rightLogoUrl": 'https://storage.googleapis.com/animable/cisco-cxc/clus-imagine.gif'
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
    "containerCssClassname": "cisco-cxc",
    "background": "url(/assets/cisco-cxc/blue-bubbles-bg.png)",
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/cisco-cxc/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cisco-cxc/cisco-vision.png',
          "rightLogoUrl": 'https://storage.googleapis.com/animable/cisco-cxc/clus-imagine.gif'
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
      "url": () => `https://storage.googleapis.com/animable/NBA/allstar1.mp4`
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
      "url": () => `https://storage.googleapis.com/animable/bayclub/loading.mp4`
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

 
}
