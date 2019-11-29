// libs
import React, { Component } from 'react';
import * as d3 from "d3";

// src
import {getSize, getModalCoordinates, transitElement} from './utils'
import "./cluster.css";

class Cluster extends Component {
  constructor(props) {
      super(props)
      const {width, height} = this.props
      this.canvas = null;
      this.state = {
        active: null
      }
      this.firstTransit = false
      this.modalCoordinates = getModalCoordinates(width, height)
  }

  componentDidMount(){
    
    
    if(this.canvas){

       // Mutation Alert
       let itemTransit = ''
       const setItemTransit = (index) => {
         itemTransit=index
       }
       // Mutation Alert
  
      const canvas = d3.select(this.canvas);
      const { data } = this.props
      const {cluster, cover} = data
      this.firstTransit = true
      const transit = canvas.transition().delay(3000).duration(1000).ease(d3.easeLinear)
      

      canvas.append('div').attr('id', 'cover')
      .selectAll('.coverCircles').data(cover)
      .enter().append('div')
      .attr('id', (d)=> d.data.id)
      .attr('class', 'coverCircles')
      .style("left", (d) => `${d.ax0}px`)
      .style("top", (d) => `${d.ay0}px`)
      .style(
        "width",
        (d) =>
          `${getSize(d, 0) * 0.4}px`
      )
      .style(
        "height",
        (d) =>
          `${getSize(d, 0) * 0.4}px`
      )
      .transition(transit)
      .style("left", (d) => `${d.x0}px`)
      .style("top", (d) => `${d.y0}px`)
      .style(
        "width",
        (d) =>
          `${getSize(d, 1) * 0.8}px`
      )
      .style(
        "height",
        (d) =>
          `${getSize(d, 1) * 0.8}px`
      )
      .transition()
      .delay(200).remove()


      const main = canvas.append('div').attr('id', 'main')
      main.transition().delay(5000).on('end', () => {
        this.firstTransit = false
        transitElement(items, this.modalCoordinates, setItemTransit)
      })
      
      const items = main
      .selectAll('.mainCircles')
      .data(cluster)
      .enter()
      .append('div')
      .attr('id', (d)=> d.data.id)
      .attr('class', 'mainCircles')
      .style("left", (d) => `${d.ax0}px`)
      .style("top", (d) => `${d.ay0}px`)
      .style(
        "width",
        (d) =>
          `${getSize(d, 0) * 0.4}px`
      )
      .style(
        "height",
        (d) =>
          `${getSize(d, 0) * 0.4}px`
      )

      items
      .append('div')
      .attr('class', 'image')
      .style("left", `0px`)
      .style("top", `0px`)
      .style(
        "width",
        (d) =>
          `${getSize(d, 0) * 0.4}px`
      )
      .style(
        "height",
        (d) =>
          `${getSize(d, 0) * 0.4}px`
      )

      items.append('div')
      .attr('class', 'left')
      
      items.append('div')
      .attr('class', 'right')

      items.select('.image')
      .append('div')
      .style('width', '100%')
      .style('height', '100%')
      .style('background',(d)=> `url('${d.data.userImage}') center center no-repeat transparent`)
      .style('border-radius', '50%')

      items.select('.left')
      .append('div')
      .attr('class', 'username')
      .text((d)=> d.data.userName)
      
      items.select('.left')
      .append('div')
      .attr('class', 'social-values')

      items.select('.social-values')
      .append('div')
      .attr('class', 'likes')
      .text((d)=> d.data.likes)

      items.select('.social-values')
      .append('div')
      .attr('class', 'comments')
      .text((d)=> d.data.comments)

      
      items.select('.right')
      .append('div')
      .attr('class', 'right-content')
      
      items.select('.right-content')
      .append('div')
      .attr('class', 'post-image')
      .append('div')
      .style('width', '100%')
      .style('height', '100%')
      .style('background',(d)=> `url('${d.data.postImage}') center center no-repeat transparent`)

      items.select('.right-content')
      .append('div')
      .attr('class', 'post-text')
      .text((d)=> d.data.postText)




      items
      .on('click', (d, i)=> {
        if(!this.firstTransit && itemTransit !== i){
          transitElement(items, this.modalCoordinates, setItemTransit, i)
        }
      } )
      .on('touch', (d, i)=> {
        if(!this.firstTransit && itemTransit !== i){
          transitElement(items, this.modalCoordinates, setItemTransit, i)
        }
      } ).transition(transit)
      .style("left", (d) => `${d.x0}px`)
      .style("top", (d) => `${d.y0}px`)
      .style(
        "width",
        (d) =>
          `${getSize(d, 1) * 0.8}px`
      )
      .style(
        "height",
        (d) =>
          `${getSize(d, 1) * 0.8}px`
      )
      

      items
      .select('.image')
      .transition(transit)
      .style("left", `0px`)
      .style("top", `0px`)
      .style(
        "width",
        (d) =>
          `${getSize(d, 1) * 0.8}px`
      )
      .style(
        "height",
        (d) =>
          `${getSize(d, 1) * 0.8}px`
      )
    
    }
  }

  render() {
      const {width, height} = this.props
      return (
        <div
          className="root"
          style={{ width: width, height: height }}
          ref={node => this.canvas = node}
        />
    )
  }
}

export default Cluster;