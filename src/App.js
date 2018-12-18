import 'whatwg-fetch';
import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import lodash from "lodash";

import './App.css';
import './CiscoSans.css';
import 'flexboxgrid';
import { getConfig } from './Helper.js'

import Leaderboard from "./components/leaderboard/IndexComponent.js";
import VolumeOfConversation from "./components/conversationvolume/IndexComponent.js";
import TrendingDiscussion from "./components/trendingdiscussion/IndexComponent.js";
import MediaCarousel from "./components/mediacarousel/IndexComponent.js";
import PhotoGrid from "./components/photogrid/IndexComponent.js";
import HorizontalStream from "./components/horizontalstream/IndexComponent.js";
import MasonaryStream from "./components/masonarystream/IndexComponent.js";
import Marquee from "./components/marquee/IndexComponent.js"; //Not using regular layout
import MarqueeBlue from "./components/marqueeblue/IndexComponent.js"; //Not using regular layout
import Capsule from "./components/capsule/IndexComponent.js"; //Not using regular layout
import GridView from "./components/gridview/GridView.js"; //Not using regular layout
import PhotoWall from './components/photowall/IndexComponent.js';
import StatsView from './components/stats/IndexComponent.js';
import Ticker from './components/ticker/IndexComponent.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Route path="/leaderboard" render={() => <Leaderboard config={getConfig()}  />}/>
          <Route path="/volume" render={() => <VolumeOfConversation config={getConfig()} />}/>
          <Route path="/trending" render={() => <TrendingDiscussion config={getConfig()} />}/>
          <Route path="/carousel" render={() => <MediaCarousel config={getConfig()} />}/>
          <Route path="/photogrid" render={() => <PhotoGrid config={getConfig()} />}/>
          <Route path="/photogridFill" render={() => <PhotoGrid objectFit="fill" config={getConfig()} />}/>
          <Route path="/hstream" render={() => <HorizontalStream config={getConfig()} />}/>
          <Route path="/mstream" render={() => <MasonaryStream config={getConfig()} />}/>
          <Route path="/marquee" render={() => <Marquee config={getConfig()}/>}/>
          <Route path="/marqueeBlue" render={() => <MarqueeBlue config={getConfig()} />}/>
          <Route path="/capsule" render={() => <Capsule config={getConfig()} />}/>
          <Route path="/gridview" render={() => <GridView config={getConfig()} />} />
          <Route path="/photowall" render={() => <PhotoWall config={getConfig()} />} />
          <Route path="/counter" render={() => <StatsView config={getConfig()} />} />
          <Route path="/ticker" render={() => <Ticker config={getConfig()} />} />
        </div>
      </Router>
    );
  }
}

export default App;
