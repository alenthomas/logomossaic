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
      "sides": 20,
      "cardDisplayTime": 10,
      "refreshrate": 20,
      "hideBgWave": false,
    },
    "verticalcarousel": {
      "title": "Featured Content",
      "sides": 20,
      "cardDisplayTime": 10,
      "refreshrate": 20,
      "hideBgWave": true,
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
      "refreshrate": 600
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
    "agenda": {
      "title": "Agenda",
      "hideBgWave": true
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

  "wearecisco": {
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
      "title": "#WeAreCisco Highlights"
    },
    "photogrid": {
      "title": "Cisco Social Grid"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    },
    "photowall": {
      "title": "#WeAreCisco Social Pulse",
      "tileBgText": "#WeAreCisco",
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

  "nuhuskies": {
    "containerCssClassname": "nuhuskies",
    "background": "url(/assets/nuhuskies/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/nuhuskies/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/nuhuskies/leftLogo.png',
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
      "title": "#HowlinHuskies Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "NortheasternU Highlights"
    },
    "photogrid": {
      "title": "#NortheasternU Visuals"
    },
    "trendingdiscussion": {
      "title": "#NortheasternU Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#HowlinHuskies",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#howlinhuskies"]
    }
  },

  "nuhuskiescs": {
    "containerCssClassname": "nuhuskies",
    "background": "url(/assets/nuhuskies/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/nuhuskies/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/nuhuskies/leftLogo.png',
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
      "title": "#HowlinHuskies Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "Khoury College Highlights"
    },
    "photogrid": {
      "title": "Khoury College Visuals"
    },
    "trendingdiscussion": {
      "title": "Khoury College Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#HowlinHuskies",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#howlinhuskies"]
    }
  },

  "nuhuskiesbusiness": {
    "containerCssClassname": "nuhuskies",
    "background": "url(/assets/nuhuskies/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/nuhuskies/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/nuhuskies/leftLogo.png',
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
      "title": "#HowlinHuskies Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "DAmoreMcKim BSchool Highlights"
    },
    "photogrid": {
      "title": "DAmoreMcKim BSchool Visuals"
    },
    "trendingdiscussion": {
      "title": "DAmoreMcKim BSchool Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#HowlinHuskies",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#howlinhuskies"]
    }
  },

  "nuhuskiessports": {
    "containerCssClassname": "nuhuskies-sports",
    "background": "url(/assets/nuhuskies/bg_sports.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/nuhuskies/loading_sports.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/nuhuskies/leftLogo.png',
          "rightLogoUrl": '/assets/nuhuskies/rightLogo.png'
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
      "title": "#HowlinHuskies Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "#HowlinHuskies Highlights"
    },
    "photogrid": {
      "title": "#HowlinHuskies Visuals"
    },
    "trendingdiscussion": {
      "title": "#HowlinHuskies Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#HowlinHuskies",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#howlinhuskies"]
    }
  },

  "xfl.com:context=socialwall": {
    "containerCssClassname": "xfl",
    "background": "url(/assets/xfl/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/xfl/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/xfl/leftLogo.png',
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
      "title": "#XFL2020 Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "#XFL2020 Highlights"
    },
    "photogrid": {
      "title": "#XFL2020 Visuals"
    },
    "trendingdiscussion": {
      "title": "#XFL Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#XFL2020",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#howlinhuskies"]
    }
  },

  "expo2020": {
    "containerCssClassname": "expo2020",
    "background": "url(/assets/expo2020/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/expo2020/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/expo2020/leftLogo.png',
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
      "title": "#XFL2020 Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "#Expo2020 Highlights"
    },
    "photogrid": {
      "title": "#Expo2020 Visuals"
    },
    "trendingdiscussion": {
      "title": "#Expo2020 Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#Expo2020",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#expo2020"]
    }
  },

  "pureaccel": {
    "containerCssClassname": "pureaccel",
    "background": "url(/assets/pureaccel/bg.jpg)",
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/pureaccelerate/loading.mp4`,
      "urlVertical": () => `https://storage.googleapis.com/animable/pureaccelerate/loading768*1920.mp4`,
      "urlVertical1152": () => `https://storage.googleapis.com/animable/pureaccelerate/loading768*1152.mp4`,
      "urlVertical1920": () => `https://storage.googleapis.com/animable/pureaccelerate/loading768*1920.mp4`,
      "urlHorizontal768": () => `https://storage.googleapis.com/animable/pureaccelerate/loading1920*768.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/pureaccel/leftLogonew.png',
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
      "title": "Social Leaderboard"
    },
    "leaderboardv2": {
      "title": "Social Leaderboard",
      "hideBgWave": true,
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "Social Highlights"
    },
    "verticalcarousel": {
      "title": "Social Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#Expo2020 Visuals"
    },
    "trendingdiscussion": {
      "title": "#PureAccelerate Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#PureAccelerate",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#expo2020"]
    }
  },

  "gehealthcare": {
    "containerCssClassname": "gehealthcare",
    "background": "url(/assets/gehealthcare/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/gehealthcare/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/gehealthcare/leftLogo.png',
          "rightLogoUrl": '/assets/gehealthcare/rightLogo.png'
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
      "title": "#PureAccelerate Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "#GEHealhCare Highlights"
    },
    "photogrid": {
      "title": "#Expo2020 Visuals"
    },
    "trendingdiscussion": {
      "title": "#GEHealthCare Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#GEHealthCare",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#expo2020"]
    }
  },

  "ciscodining": {
    "containerCssClassname": "ciscodining",
    "background": "url(/assets/ciscodining/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/ciscostore/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/ciscodining/leftLogo.png',
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
      "title": "# Leaderboard"
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "Cisco Dining Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#Expo2020 Visuals"
    },
    "trendingdiscussion": {
      "title": "#GEHealthCare Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#GEHealthCare",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#expo2020"]
    }
  },

  "ciscolivela": {
    "containerCssClassname": "ciscolivela",
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
          "leftLogoUrl": '/assets/cancun/possible-logo.png',
          "rightLogoUrl": '/assets/cancun/live-logo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "leaderboard": {
      "title": "#CiscoLiveLA Leaderboard",
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "#CiscoLiveLA Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CiscoLiveLA Trending Topics"
    },
    "photowall": {
      "title": "#CiscoLiveLA Social Pulse",
      "tileBgText": "#CiscoLiveLA",
      "hideBgWave": true,
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "agenda": {
      "title": "",
      "hideBgWave": true
    }
  },

  "ciscobeat": {
    "containerCssClassname": "ciscobeat",
    "background": "url(/assets/ciscobeat/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/ciscobeat/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/ciscobeat/leftLogo.png',
          "rightLogoUrl": '/assets/ciscobeat/rightLogo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "leaderboard": {
      "title": "#CiscoLiveLA Leaderboard",
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "#CiscoBeat Highlights"
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CiscoLiveLA Trending Topics"
    },
    "photowall": {
      "title": "#CiscoBeat Social Pulse",
      "tileBgText": "#CiscoBeat",
      "hideBgWave": true,
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "agenda": {
      "title": "",
      "hideBgWave": true
    }
  },

  "oakpanthers": {
    "containerCssClassname": "oakpanthers",
    "background": "url(/assets/oakpanthers/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/oakpanthers/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/oakpanthers/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "leaderboard": {
      "title": "#CiscoLiveLA Leaderboard",
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "#OaklandPanthers Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CiscoLiveLA Trending Topics"
    },
    "photowall": {
      "title": "#OaklandPanthers Social Pulse",
      "tileBgText": "#OaklandPanthers",
      "hideBgWave": true,
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "agenda": {
      "title": "",
      "hideBgWave": true
    }
  },

"neimanmarcus": {
    "containerCssClassname": "neimanmarcus",
    "background": "url(/assets/neimanmarcus/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/ciscostore/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/neimanmarcus/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "leaderboard": {
      "title": "#CiscoLiveLA Leaderboard",
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "#NeimanMarcus Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CiscoLiveLA Trending Topics"
    },
    "photowall": {
      "title": "#CiscoLiveLA Social Pulse",
      "tileBgText": "#CiscoLiveLA",
      "hideBgWave": true,
    },
    "tweetcounts": {
      "title": "#CLUS Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "agenda": {
      "title": "",
      "hideBgWave": true
    }
  },


}
