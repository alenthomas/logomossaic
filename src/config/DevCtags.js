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
      "title": { 'day': 'Volume This Week', 'hour': "Volume Today" }
    },
    "horizontalstream": {
      "title": "#CiscoLiveLA"
    },
    "leaderboard": {
      "title": "#CiscoLiveLA",
      "refreshrate": 10,
    },
    "masonarystream": {
      "title": "#CiscoLiveLA"
    },
    "mediacarousel": {
      "title": "Featured Content",
      "sides": 14,
      "cardDisplayTime": 2,
      "refreshrate": 10,
    },
    "photogrid": {
      "title": "Photo Grid"
    },
    "trendingdiscussion": {
      "title": "#CiscoLiveLA"
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
    },
    "photowall": {
      "title": "#CiscoLiveLA",
      "tileBgText": "#CiscoLiveLA",
      "hideBgWave": true,
      "cardDisplayTime": 10,
      "refreshrate": 10
    },
    "marquee": {
      "count": 2,
      "refreshrate": 10,
    },
    "marqueeblue": {
      "count": 2,
      "refreshrate": 10,
    }
  },

  "CiscoSprinklr": {
    "sprinklrApi": true,
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
    "photowall": {
      "title": "#CiscoStore Social Pulse",
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
    "containerCssClassname": "clus2018",
    "background": "url(/assets/clus2018/blue-bubbles-bg.png)",
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/cisco-live/${lodash.random(1, 6)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": 'https://storage.googleapis.com/animable/cisco-live/clus2018.png',
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
      "title": "#CLUS Highlights"
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
      "title": "#CiscoStore Highlights",
      "refreshrate": 5
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
    }
  },

  "xfl.com:context=socialwall": {
    "marquee": {
    },
    "marqueeblue": {
    }
  },

  "avaya.com:context=socialwall": {
    "containerCssClassname": "avaya",
    "background": 'url("/assets/avaya/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/avaya/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/avaya/leftLogo.jpg',
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
    "masonarystream": {
      "title": "Social Feed"
    },
    "mediacarousel": {
      "title": "Avaya Highlights"
    },
    "photogrid": {
      "title": "Avaya Moments"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    }
  },

  "keralatourism.org:context=dooh": {
    "containerCssClassname": "vyoma-demo",
    "background": 'url("/assets/vyoma-demo/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/vyoma-demo/loading.mp4`
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

  "indiatoday.com:context=socialwall": {
    "containerCssClassname": "indiatoday",
    "background": 'url("/assets/indiatoday/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/vyoma-demo/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/indiatoday/leftLogo.png',
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
      "title": "India Today Highlights"
    },
    "photogrid": {
      "title": "India Today Visuals"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    }
  },

  "statefarm.com:context=socialwall": {
    "containerCssClassname": "statefarm",
    "background": 'url("/assets/statefarm/bg.png") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/statefarm/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/statefarm/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/hearsaysystems.png'
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
      "title": "Trending On Social Media"
    },
    "photogrid": {
      "title": "State Farm Moments"
    },
    "trendingdiscussion": {
      "title": "Trending Topics"
    }
  },

  "morganstanley.com:context=socialwall": {
    "containerCssClassname": "morganstanley",
    "background": 'url("/assets/morganstanley/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `http://storage.googleapis.com/animable/morganstanley/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/morganstanley/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/hearsaysystems.png'
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
      "title": "Trending On Social Media"
    },
    "photogrid": {
      "title": "Morgan Stanley Moments"
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

  "servicenow.com:context=ebc": {
    "containerCssClassname": "servicenow",
    "background": 'url("/assets/servicenow/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => 'https://storage.googleapis.com/animable/servicenow/loading.mp4'
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/servicenow/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/fankave-full-red.png'
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
      "title": "Knowledge18 Leaderboard"
    },
    "masonarystream": {
      "title": "#CiscoPS17"
    },
    "mediacarousel": {
      "title": "ServiceNow Social Wall"
    },
    "photogrid": {
      "title": "Knowledge18 PhotoGrid"
    },
    "trendingdiscussion": {
      "title": "Knowledge18 Trends"
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

  "paloaltonetworks.com:context=ebc": {
    "containerCssClassname": "paloalto",
    "background": 'url("/assets/paloalto/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/paloalto/loading${lodash.random(1, 2)}.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/paloalto/leftLogo.png',
          "rightLogoUrl": ''
        },
        "footer": {
          "logoUrl": '/assets/logo/fankave-full-blue.png'
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
      "title": "Palo Alto Networks Social Wall"
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

  "westernunion.com:context=ebc": {
    "containerCssClassname": "westernunion",
    "background": 'url("/assets/westernunion/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => 'https://storage.googleapis.com/animable/westernunion/loading.mp4'
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

  "mma.ind:league=sfl": {
    "containerCssClassname": "sfl",
    "background": 'url("/assets/sfl/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/sfl/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/sfl/leftLogo.png',
          "rightLogoUrl": '/assets/logo/vyoma.png'
        },
        "footer": {
          "logoUrl": ''
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

  "vmware.com:context=socialwall": {
    "containerCssClassname": "vmware",
    "background": 'url("/assets/vmware/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/vmware/loading.mp4`
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
      "url": () => `https://storage.googleapis.com/animable/vmware/loading.mp4`
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
      "url": () => `https://storage.googleapis.com/animable/harker/loading.mp4`
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
      "url": () => `https://storage.googleapis.com/animable/harker/loading.mp4`
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

  "cloudflare.com:context=socialwall": {
    "containerCssClassname": "cloudflare",
    "background": 'url("/assets/cloudflare/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/cloudflare/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cloudflare/leftLogo.png',
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
      "title": "Cloudflare Social Pulse"
    },
    "photogrid": {
      "title": "Cloudflare Photowall"
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
      "title": "Cloudflare Social Pulse",
      "tileBgText": "#cloudflare",
      "hideBgWave": true
    },
    "tweetcounts": {
      "title": "#VMware Social Stats",
      "hideBgWave": true,
      "filterHashtags": ["#clus"]
    }
  },

  "cloudflare.com:context=leaders": {
    "containerCssClassname": "cloudflare",
    "background": 'url("/assets/cloudflare/bg.jpg") no-repeat',
    "loadingMedia": {
      "url": () => `https://storage.googleapis.com/animable/cloudflare/loading.mp4`
    },
    "layout": {
      "regular": {
        "header": {
          "leftLogoUrl": '/assets/cloudflare/leftLogo.png',
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
      "title": "Cloudflare Leaders"
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
}
