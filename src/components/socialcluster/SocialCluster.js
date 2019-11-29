// libs
import React, { Component } from 'react';
import size from 'lodash/fp/size';

// src
import transformData from './transformer'
import Cluster from './Cluster'

class SocialCluster extends Component {
  constructor(props) {
      super(props)
      const {data : rawData} = props
      const width = window.innerWidth
      const height = window.innerHeight
      const data = size(rawData) > 0? transformData(rawData,  width, height) : rawData
      this.state = {
          data,
          width,
          height
      }
  }

  componentWillReceiveProps(nextProps){
  //     if(!isEqual(this.props.data, nextProps.data)){
  //        const {data : rawData} = nextProps
  //        const {width, height} = this.state
  //           const data = size(rawData) > 0? transformData(rawData,  width, height) : rawData
  //         this.setState(()=> (data))
  //     }
  }


  render() {
      const {data, width, height} = this.state
    return (
      <div className='root'>
        <Cluster data={data} width={width} height={height} />
      </div>
    )
  }
}

export default SocialCluster;