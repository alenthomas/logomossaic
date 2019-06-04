import React, {Component, } from 'react';

export class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
    this.myVideos = [];
  }
  componentDidMount() {
    this.myVideos = Array.from(this.myRef.getElementsByTagName("video"));
    // getElementsByTagName returns HTMLCollection not an array;
    this.myVideos.map(element => element.addEventListener("ended", this.props.onEnded));
    setTimeout(this.props.onEnded, 9000);
  }

  setRef = (node) => {
    this.myRef=node;
  }

  componentWillUnmount() {
    this.myVideos.map(element => element.removeEventListener("ended", this.props.onEnded));
  }

  render() {
    return (
      <div ref={this.setRef} dangerouslySetInnerHTML={{ __html:`
        <video
         muted
         autoplay
         playsinline
         class="loader-card"
         src=${this.props.src}
         type=${this.props.type}
        />
      `}}/>
    )
  }
}