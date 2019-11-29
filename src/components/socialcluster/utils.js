
import * as d3 from 'd3'
import random from 'lodash/fp/random';


export function getSize(data, index){
    return index < 1 ?(data.ax1 - data.ax0 > data.ay1 - data.ay0 ? data.ay1 - data.ay0 : data.ax1 - data.ax0) :  (data.x1 - data.x0 > data.y1 - data.y0 ? data.y1 - data.y0 : data.x1 - data.x0)
}

export function getModalCoordinates(width, height){

    // box Coordinates
    const boxWidth = width * 0.6;
    const boxHeight = boxWidth * 0.5
    const x = (width/2) - (boxWidth/2)
    const y = (height/2) - (boxHeight/2)
    const boxCoordinates = {x, y, width: boxWidth, height: boxHeight}

    // InnerBox Coordinates
    const innerWidth = boxWidth
    const innerHeight = boxHeight * 0.8
    const innerX = 0
    const innerY = boxHeight * 0.1

    // image Box
    const imageWidth = innerHeight * 0.25 
    const imageHeight = innerHeight * 0.25
    const imageCenter = (innerWidth * 0.3)/2
    const imageX = innerX + (imageCenter - (imageWidth/2))
    const imageY = innerY

    // Left Box
    const leftBoxWidth = (innerWidth * 0.3) 
    const leftBoxHeight = (innerHeight * 0.7)
    const leftBoxX = innerX
    const leftBoxY = innerY + (innerHeight * 0.3)

    // right box
    const rightBoxWidth = innerWidth * 0.7
    const rightBoxHeight = innerHeight
    const rightBoxX = innerX + (innerWidth * 0.3)
    const rightBoxY = innerY

    const innerBoxCoordinates = {image: {x: imageX, y: imageY, width: imageWidth, height: imageHeight},
     left: {x: leftBoxX, y: leftBoxY, width: leftBoxWidth, height: leftBoxHeight}, 
     right: {x: rightBoxX, y: rightBoxY, width: rightBoxWidth, height: rightBoxHeight } }
    return {boxCoordinates, innerBoxCoordinates }
}

export function transitElement(selections, modalCoordinates, setTransit,  index ){
    
    const {boxCoordinates, innerBoxCoordinates } = modalCoordinates
    const {image: imageCoordinates, left: leftBoxCoordinates, right: rightBoxCoordinates} = innerBoxCoordinates
    const randIndex = index || index===0 ? index : random(0, 49)
    // Mutation
    setTransit(randIndex)
    if(index || index===0){
        selections.transition()
        selections.select('.left').transition()
        selections.select('.right').transition()
        selections.select('.image').transition()
    }
    const selection = selections
    .filter((d, i) => i === randIndex)
    const left = selection.select('.left')
    const right = selection.select('.right')
    const image = selection.select('.image')
    
    const transit = selection.transition().duration(500).ease(d3.easeLinear)

    selection.style('z-index', '99')
    .transition(transit)
      .style('width', `${boxCoordinates.width}px`)
      .style('height',`${boxCoordinates.height}px`)
      .style('left', `${boxCoordinates.x}px`)
      .style('top', `${boxCoordinates.y}px`)
      .style('border-radius', `2%`)
    .transition(transit)
    .delay(5000)
        .style('width', (d)=> `${getSize(d,1) * 0.8}px`)
        .style('height',(d)=> `${getSize(d,1) * 0.8}px`)
        .style('left', (d)=> `${d.x0}px`)
        .style('top', (d)=> `${d.y0}px`)
        .style('border-radius', '50%').style('z-index', '0')
        .on('cancel',()=> {
            selection
            .transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('width', (d)=> `${getSize(d,1) * 0.8}px`)
            .style('height',(d)=> `${getSize(d,1) * 0.8}px`)
            .style('left', (d)=> `${d.x0}px`)
            .style('top', (d)=> `${d.y0}px`)
            .style('border-radius', '50%')
            .style('z-index', '0')
        })

     // left Transition
     left
     .transition(transit)
     .style('width', `${leftBoxCoordinates.width}px`)
     .style('height',`${leftBoxCoordinates.height}px`)
     .style('left', `${leftBoxCoordinates.x}px`)
     .style('top', `${leftBoxCoordinates.y}px`)
    .transition(transit)
    .delay(5000)
    .style('width', `0px` )
    .style('height',`0px`)
    .style('left', `0px`)
    .style('top', `0px`)
    .on('cancel',()=> {
        left
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style('width', `0px` )
        .style('height',`0px`)
        .style('left', `0px`)
        .style('top', `0px`)
    })

     // right Transition
     right
     .transition(transit)
     .style('width', `${rightBoxCoordinates.width}px`)
     .style('height',`${rightBoxCoordinates.height}px`)
     .style('left', `${rightBoxCoordinates.x}px`)
     .style('top', `${rightBoxCoordinates.y}px`)
    .transition(transit)
    .delay(5000)
    .style('width', `0px` )
    .style('height',`0px`)
    .style('left', `0px`)
    .style('top', `0px`)
    .on('cancel',()=> {
        right
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style('width', `0px` )
        .style('height',`0px`)
        .style('left', `0px`)
        .style('top', `0px`)
    })

    // image Transition
    image
     .transition(transit)
     .style('width', `${imageCoordinates.width}px`)
     .style('height',`${imageCoordinates.height}px`)
     .style('left', `${imageCoordinates.x}px`)
     .style('top', `${imageCoordinates.y}px`)
     .transition(transit)
     .delay(5000)
    .style('width', (d)=> `${getSize(d,1) * 0.8}px` )
    .style('height',(d)=> `${getSize(d,1) * 0.8}px`)
    .style('left', `0px`)
    .style('top', `0px`)
    .on('cancel',()=> {
        image
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style('width', (d)=> `${getSize(d,1) * 0.8}px` )
        .style('height',(d)=> `${getSize(d,1) * 0.8}px`)
        .style('left', `0px`)
        .style('top', `0px`)
    })
    .transition(transit)
    .delay(3000)
    .on('end',()=> transitElement(selections, modalCoordinates, setTransit))
    return transit
}