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
import config from './config.js';
import { queryString } from './Helper.js'

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

const { ctag } = queryString();
const defaultConfig = config.ctag.default;
const ctagConfig = lodash.merge(defaultConfig, config.ctag[ctag]);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Route path="/leaderboard" render={() => <Leaderboard config={ctagConfig} />}/>
          <Route path="/volume" render={() => <VolumeOfConversation config={ctagConfig} />}/>
          <Route path="/trending" render={() => <TrendingDiscussion config={ctagConfig} />}/>
          <Route path="/carousel" render={() => <MediaCarousel config={ctagConfig} />}/>
          <Route path="/photogrid" render={() => <PhotoGrid config={ctagConfig} />}/>
          <Route path="/photogridFill" render={() => <PhotoGrid objectFit="fill" config={ctagConfig} />}/>
          <Route path="/hstream" render={() => <HorizontalStream config={ctagConfig} />}/>
          <Route path="/mstream" render={() => <MasonaryStream config={ctagConfig} />}/>
          <Route path="/marquee" render={() => <Marquee config={ctagConfig} />}/>
          <Route path="/marqueeBlue" render={() => <MarqueeBlue config={ctagConfig} />}/>
          <Route path="/capsule" render={() => <Capsule config={ctagConfig} />}/>
          <Route path="/gridview" render={() => <GridView config={ctagConfig} />} />
          <Route path="/photowall" render={() => <PhotoWall config={ctagConfig} />} />
          <Route path="/counter" render={() => <StatsView config={ctagConfig} />} />
          <Route path="/ticker" render={() => <Ticker config={ctagConfig} />} />
        </div>
      </Router>
    );
  }
}

export default App;
