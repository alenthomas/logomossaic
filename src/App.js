import 'whatwg-fetch';
import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import './CiscoSans.css';
import 'flexboxgrid';
import { getCurrentConfig } from './config/ConfigLoader.js'

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
          <Route path="/leaderboard" render={(props) => <Leaderboard config={getCurrentConfig()} {...props} />}/>
          <Route path="/volume" render={(props) => <VolumeOfConversation config={getCurrentConfig()} {...props} />}/>
          <Route path="/trending" render={(props) => <TrendingDiscussion config={getCurrentConfig()} {...props} />}/>
          <Route path="/carousel" render={(props) => <MediaCarousel config={getCurrentConfig()} {...props} />}/>
          <Route path="/photogrid" render={(props) => <PhotoGrid config={getCurrentConfig()} {...props} />}/>
          <Route path="/photogridFill" render={(props) => <PhotoGrid objectFit="fill" config={getCurrentConfig()} {...props} />}/>
          <Route path="/hstream" render={(props) => <HorizontalStream config={getCurrentConfig()} {...props} />}/>
          <Route path="/mstream" render={(props) => <MasonaryStream config={getCurrentConfig()} {...props} />}/>
          <Route path="/marquee" render={(props) => <Marquee config={getCurrentConfig()} {...props} />}/>
          <Route path="/marqueeBlue" render={(props) => <MarqueeBlue config={getCurrentConfig()} {...props} />}/>
          <Route path="/capsule" render={(props) => <Capsule config={getCurrentConfig()} {...props} />}/>
          <Route path="/gridview" render={(props) => <GridView config={getCurrentConfig()} {...props} />} />
          <Route path="/photowall" render={(props) => <PhotoWall config={getCurrentConfig()} {...props} />} />
          <Route path="/counter" render={(props) => <StatsView config={getCurrentConfig()} {...props} />} />
          <Route path="/ticker" render={(props) => <Ticker config={getCurrentConfig()} {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
