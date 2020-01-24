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
      "refreshrate": 10,
      "hideBgWave": true,
    },
    "masonarystreamv3": {
      "refreshrate": 10,
      "hideBgWave": true,
    },
    "masonarystreamv4": {
      "refreshrate": 10,
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "Featured Content",
      "sides": 14,
      "cardDisplayTime": 7,
      "refreshrate": 10,
      "hideBgWave": false,
      "displayCounter": false,
      "counterHandle": ""
    },
    "verticalcarousel": {
      "title": "Featured Content",
      "sides": 14,
      "cardDisplayTime": 7,
      "refreshrate": 10,
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
      "refreshrate": 10,
      "loadSequentially": false,
      "showFirst": 10,
    },
    "marquee": {
      "count": 2,
      "refreshrate": 10,
    },
    "marqueeblue": {
      "count": 2,
      "refreshrate": 10,
    },
    "ticker": {
      "refreshrate": 10,
    },
    "polling": {
      "title": "Vote Fav !",
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
    },
    "leaderboardqr": {
      "title": "Scanify Leaderboard",
      "hideBgWave": true,
    },
    "marqueeleader": {
      "count": 10,
      "refresh": 25
    }
  },

  "ciscolivela": {
    "containerCssClassname": "cisco-cancun",
    "background": "url(/assets/cancun/bg-green.png)",
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cancun/possible-logo.png',
          "rightLogoUrl": '/assets/cancun/live-logo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/fankave-cornered.png'
        },
      }
    },
    "agenda": {
      "title": "",
      "hideBgWave": true
    },
    "socialCluster": {
      "title": "",
      "hideBgWave": true
    }
  },
  "fankave.com:context=test": {
    "containerCssClassname": "cisco-cancun",
    "background": "url(/assets/cancun/bg-green.png)",
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cancun/possible-logo.png',
          "rightLogoUrl": '/assets/cancun/live-logo.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/fankave-cornered.png'
        },
      }
    },
    "agenda": {
      "title": "",
      "hideBgWave": true
    }
  },

  "CiscoSprinklr": {
    "sprinklrApi": {
      "topics": {
        "The Bridge": "5bdc66f3e4b08e15d20d596c",
        "Social" : "5bd7328de4b0f425bbf8a05d"
      }
    },
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
    "photowall": {
      "title": "Cisco",
      "tileBgText": "#CiscoStore",
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
      "title": "#CLUS Leaderboard"
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
      "title": "Social Feed",
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
      "title": "Vote for your favourite post",
      "hideBgWave": true,
      "refreshrate": 250,
    },
    "pollingresults": {
      "title": "Top Winners",
      "hideBgWave": true,
      "refreshrate": 10,
    },
  },

  "bethebridge": {
    "containerCssClassname": "clus2018",
    "background": "url(/assets/clus2019/blue-bg-1080.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/cisco-live/${lodash.random(1, 6)}.mp4`,
      "urlVertical": () => `https://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `https://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `https://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/clus2019/logo.png',
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
    "leaderboardv2": {
      "title": "Leaderboard",
      "hideBgWave": true,
    },
    "masonarystream": {
      "title": "Social Feed"
    },
    "masonarystreamv2": {
      "title": "Social Feed",
      "hideBgWave": true,
      "refreshrate": 150,
    },
    "masonarystreamv3": {
      "title": "Social Feed",
      "hideBgWave": true,
      "refreshrate": 100,
    },
    "masonarystreamv4": {
      "title": "Social Feed",
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
      "title": "Vote !",
      "hideBgWave": true,
      "refreshrate": 250
    },
    "pollingresults": {
      "title": "Top 6 Winners",
      "hideBgWave": true,
      "refreshrate": 10
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
    "background": "url(/assets/ciscostore/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/ciscostore/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/tiecon/loading_vertical.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/ciscostore/leftLogo.png',
          "rightLogoUrl": '/assets/ciscostore/rightLogo.png'
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
      "refreshrate": 10,
      "cardDisplayTime": 7,
      "hideBgWave": true,
      "displayCounter": true,
      "counterHandle": "ciscostore"
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
      "hideBgWave": true,
      "refreshrate": 5,
    },
    "tweetcounts": {
      "title": "#CiscoStore Social Stats",
      "hideBgWave": true
    },
    "marquee": {
      "count": 5,
      "refreshrate": 5,
    },
    "marqueeblue": {
      "count": 10,
      "refreshrate": 5,
    },
    "leaderboardqr": {
      "title": "Scanify Leaderboard",
      "hideBgWave": true,
    },
  },

  "xfl.com:context=socialwall": {
    "marquee": {
    },
    "marqueeblue": {
    }
  },

  "keralatourism.org:context=dooh": {
    "containerCssClassname": "vyoma-demo",
    "background": 'url("/assets/vyoma-demo/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/vyoma-demo/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/keralatourism/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/vyoma-demo/leftLogo.png'
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
      "title": "Kerala On Social Media"
    },
    "photogrid": {
      "title": "Kerala In Pictures"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    }
  },

  "netflix.com:context=ebc": {
    "containerCssClassname": "netflix",
    "background": 'url("/assets/netflix/bg.png") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/netflix/loading${lodash.random(1, 2)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/netflix/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/fankave-full.png'
        },
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "#CiscoPS17"
    },
    "leaderboard": {
      "title": "#CiscoPS17"
    },
    "masonarystream": {
      "title": "#CiscoPS17"
    },
    "mediacarousel": {
      "title": "Netflix Chill Wall"
    },
    "photogrid": {
      "title": "#CiscoPS17"
    },
    "trendingdiscussion": {
      "title": "#CiscoPS17"
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

  "dell.com:context=ebc-sv": {
    "containerCssClassname": "dellebc-sv",
    "background": 'url("/assets/dell/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => 'http://storage.googleapis.com/animable/dell/loading.mp4'
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/dell/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/fankave-full.png'
        },
      }
    },
    "conversationvolume": {
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": ""
    },
    "leaderboard": {
      "title": ""
    },
    "masonarystream": {
      "title": ""
    },
    "mediacarousel": {
      "title": "Dell EBC Social Wall"
    },
    "photogrid": {
      "title": "Dell on Social"
    },
    "trendingdiscussion": {
      "title": ""
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

  "westernunion.com:context=ebc": {
    "containerCssClassname": "westernunion",
    "background": 'url("/assets/westernunion/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => 'http://storage.googleapis.com/animable/westernunion/loading.mp4'
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/westernunion/leftLogo.png',
          "rightLogoUrl": '/assets/logo/fankave-full.png'
        },
        "footer": {
          "logoUrl": ''
        },
      }
    },
    "mediacarousel": {
      "title": "WU Social Wall"
    },
  },

  "cisco.com:context=cxc": {
    "containerCssClassname": "cisco-cxc",
    "background": "url(/assets/cisco-cxc/blue-bubbles-bg.png)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/cisco-cxc/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cisco-cxc/cisco-vision.png',
          "rightLogoUrl": 'http://storage.googleapis.com/animable/cisco-cxc/clus-imagine.gif'
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
      "url": () => `http://storage.googleapis.com/animable/cisco-cxc/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cisco-cxc/cisco-vision.png',
          "rightLogoUrl": 'http://storage.googleapis.com/animable/cisco-cxc/clus-imagine.gif'
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
      "url": () => `http://storage.googleapis.com/animable/cisco-cxc/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cisco-cxc/cisco-vision.png',
          "rightLogoUrl": 'http://storage.googleapis.com/animable/cisco-cxc/clus-imagine.gif'
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
      "url": () => `http://storage.googleapis.com/animable/cisco-cxc/${lodash.random(1, 6)}.mp4`
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

  "vmware.com:context=socialwall": {
    "containerCssClassname": "vmware",
    "background": 'url("/assets/vmware/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/vmware/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/vmware/leftLogo.png',
          "rightLogoUrl": ''
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
      "title": "VMware Trending Now"
    },
    "photogrid": {
      "title": "VMWare Photowall"
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
    "photowall": {
      "title": "VMware Social Pulse",
      "tileBgText": "#VMware",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#VMware Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "vmware.com:context=vsphere": {
    "containerCssClassname": "vmware",
    "background": 'url("/assets/vmware/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/vmware/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/vmware/leftLogo.png',
          "rightLogoUrl": ''
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
      "title": "VMware Horizon Highlights"
    },
    "photogrid": {
      "title": "VMware Horizon Visuals"
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
    "photowall": {
      "title": "VMworld Social Pulse",
      "tileBgText": "#VMworld",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#VMware Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "harker.org:context=socialwall": {
    "containerCssClassname": "harker",
    "background": 'url("/assets/harker/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/harker/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/harker/leftLogo.png',
          "rightLogoUrl": ''
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
      "title": "Harker Trending Content"
    },
    "photogrid": {
      "title": "Harker Photowall"
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
    "photowall": {
      "title": "Harker Social Pulse",
      "tileBgText": "#harker",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#VMware Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "harker.org:context=sports": {
    "containerCssClassname": "harker",
    "background": 'url("/assets/harker/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/harker/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/harker/leftLogo.png',
          "rightLogoUrl": ''
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
      "title": "Harker Sports Trending Now"
    },
    "photogrid": {
      "title": "Harker Sports In Photos"
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
    "photowall": {
      "title": "Harker Sports Social Pulse",
      "tileBgText": "#harker",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#VMware Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "tmobilelovewall": {
    "containerCssClassname": "tmobile",
    "background": 'url("/assets/tmobile/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `http://github.com/alenthomas/alenthomas.github.io/blob/master/image/11.mp4?raw=true`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/tmobile/leftLogo.png',
          "rightLogoUrl": ''
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
      "title": "#tmobile Love Wall"
    },
    "photogrid": {
      "title": "SFL In Photos"
    },
    "trendingdiscussion": {
      "title": "#tmobile Trending Topics"
    },
    "leaderboardtile": {
      "title": ""
    },
    "photogridtile": {
      "title": ""
    },
    "photowall": {
      "title": "#tmobile Social Pulse",
      "tileBgText": "#tmobile",
      "hideBgWave": true,
      "cardDisplayTime": 7,
      "initialLoadTime": 3,
      "interval": 3,
      "loadSequentially": true,
      "showFirst": 4
    },
    "tweetcounts": {
      "title": "#VMware Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "sjsugeneral": {
    "containerCssClassname": "sjsuspartans",
    "background": "url(/assets/sjsuspartans/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/sjsuspartans/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/sjsuspartans/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "mediacarousel": {
      "title": "San Jose Spartans Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CLUS Trending Topics"
    },
    "photowall": {
      "title": "San Jose Spartans Social Pulse",
      "tileBgText": "#SJSU",
      "hideBgWave": true
    },
  },

  "sjsusports": {
    "containerCssClassname": "sjsuspartans",
    "background": "url(/assets/sjsuspartans/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/sjsuspartans/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/sjsuspartans/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "mediacarousel": {
      "title": "Spartans Sports Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CLUS Trending Topics"
    },
    "photowall": {
      "title": "Spartans Sports Social Pulse",
      "tileBgText": "#SJSU",
      "hideBgWave": true
    },
  },

  "sjsueducation": {
    "containerCssClassname": "sjsuspartans",
    "background": "url(/assets/sjsuspartans/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/sjsuspartans/loading.mp4`,
      "urlVertical": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`,
      "urlVertical320": () => `http://storage.googleapis.com/animable/clus2019/320/2.mp4`,
      "urlVertical640": () => `http://storage.googleapis.com/animable/clus2019/640/2.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/sjsuspartans/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "mediacarousel": {
      "title": "Spartans Education Highlights",
      "hideBgWave": true
    },
    "photogrid": {
      "title": "#CLUS Visuals"
    },
    "trendingdiscussion": {
      "title": "#CLUS Trending Topics"
    },
    "photowall": {
      "title": "Spartans Education Social Pulse",
      "tileBgText": "#SJSU",
      "hideBgWave": true
    },
  },

  "pureaccel": {
    "containerCssClassname": "pureaccel",
    "background": "url(/assets/pureaccel/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/oakpanthers/${lodash.random(1, 2)}.mp4`,
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
      "hideBgWave": true
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
      "hideBgWave": true,
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

  "oakpanthers": {
    "containerCssClassname": "oakpanthers",
    "background": "url(/assets/oakpanthers/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/oakpanthers/1.mp4`,
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
      "title": "#OaklandPanthers Highlights"
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
  "qrcisco": {
    "containerCssClassname": "qrcisco",
    "background": "url(/assets/qrcisco/bg.jpg)",
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/clus2019/1920/${lodash.random(1, 5)}.mp4`,
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": 'url(/assets/ciscostore/bg.png)',
          "rightLogoUrl": '/assets/logo/cisco-vision.png'
        },
        "footer": {
          "logoUrl": '/assets/logo/pow-by-fankave-white.png'
        },
      },
      "threecolumn": {
      }
    },
    "leaderboard": {
      "title": "Leaderboard",
      "hideBgWave": true,
    },
    "mediacarousel": {
      "title": "Highlights"
    },
    "photogrid": {
      "title": "Visuals"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    },
    "photowall": {
      "title": "Social Pulse",
      "tileBgText": "#Social Pulse",
      "hideBgWave": true,
    },
    "tweetcounts": {
      "title": "Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    },
    "agenda": {
      "title": "",
      "hideBgWave": true
    }
  },
}
