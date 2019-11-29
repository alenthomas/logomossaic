
// libs
import map from 'lodash/map'
import shuffle from "lodash/fp/shuffle";
import reduce from "lodash/fp/reduce";
import getOr from "lodash/fp/getOr";
import random from "lodash/fp/random";
// src
import packer from './packer'


function transformPosts(data, width, height){

  return reduce((final, photo)=> {
    const {data: photoData, sizes} = photo
    const likes = getOr(0, ['metrics', 'likes'])(photoData)
    const comments = getOr(0, ['metrics', 'comments'])(photoData)
    const name = getOr('', ['author', 'name'])(photoData)
    const userName = getOr('', ['author', 'alias'])(photoData)
    const userImage = getOr('https://d2ln1xbi067hum.cloudfront.net/assets/default_user-951af10295a22e5f7fa2fa6165613c14.png', ['author', 'photo'])(photoData)
    const postText = getOr('', ['text'])(photoData)
    const postImage = getOr('', ['media','0', 'url'])(photoData)
    const count = random(0, 100)
    return [
      ...final,
      {
        likes, 
        comments, 
        name, 
        userImage, 
        userName, 
        postText, 
        postImage,
        count
      }
    ]
  }, [])(data)
}


export default function(rawData, width, height){
  const rawPosts = transformPosts(rawData, width, height)
    const treeMap = packer({ name: "root", children: shuffle(rawPosts) }, width, height);

    const treeMapAnimated = packer(
      {
        name: "root",
        children: shuffle(rawPosts)
      }, width, height
    );

    const coverMapAnimated = packer(
      {
        name: "root",
        children: shuffle(rawPosts)
      }, width, height
    );

    const {children} = treeMap

    const mergedMap = map(children, (node, index) => ({
        ...node,
        ax0: treeMapAnimated.children[index].x0,
        ax1: treeMapAnimated.children[index].x1,
        ay0: treeMapAnimated.children[index].y0,
        ay1: treeMapAnimated.children[index].y1
      }))
      const coverMergedMap = map(children, (node, index) => ({
        ...node,
        ax0: coverMapAnimated.children[index].x0,
        ax1: coverMapAnimated.children[index].x1,
        ay0: coverMapAnimated.children[index].y0,
        ay1: coverMapAnimated.children[index].y1
      }))
    return {cluster: mergedMap, cover: coverMergedMap }
}