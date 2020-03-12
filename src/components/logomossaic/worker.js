import * as d3 from 'd3-delaunay';

export const calculatePoints = async (data, width, height, n) => {
  const pointsInput = new Float64Array(n * 2);
  const c = new Float64Array(n * 2);
  const s = new Float64Array(n);

    // Initialize the pointsInput using rejection sampling.
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < 30; ++j) {
      const x = pointsInput[i * 2] = Math.floor(Math.random() * width);
      const y = pointsInput[i * 2 + 1] = Math.floor(Math.random() * height);
      if (Math.random() < data[y * width + x])
        break;
    }
  }
  // console.log('--------------', d3)
  const delaunay = await new d3.Delaunay(pointsInput);
  const voronoi = await delaunay.voronoi([0, 0, width, height]);
  for (let k = 0; k < 80; ++k) {
    // Compute the weighted centroid for each Voronoi cell.
    c.fill(0);
    s.fill(0);
    for (let y = 0, i = 0; y < height; ++y) {
      for (let x = 0; x < width; ++x) {
        const w = data[y * width + x];
        i = delaunay.find(x + 0.5, y + 0.5, i);
        s[i] += w;
        c[i * 2] += w * (x + 0.5);
        c[i * 2 + 1] += w * (y + 0.5);
      }
    }
    // Relax the diagram by moving pointsInput to the weighted centroid.
    // Wiggle the pointsInput a little bit so they don’t get stuck.
    const w = Math.pow(k + 1, -0.8) * 10;
    for (let i = 0; i < n; ++i) {
      const x0 = pointsInput[i * 2], y0 = pointsInput[i * 2 + 1];
      const x1 = s[i] ? c[i * 2] / s[i] : x0, y1 = s[i] ? c[i * 2 + 1] / s[i] : y0;
      pointsInput[i * 2] = x0 + (x1 - x0) * 1.8 + (Math.random() - 0.5) * w;
      pointsInput[i * 2 + 1] = y0 + (y1 - y0) * 1.8 + (Math.random() - 0.5) * w;
    }
    postMessage(pointsInput);
    return;
    voronoi.update();
  }
}


function comparatorX(a, b) {
  return a[0] - b[0]
}

function comararatorY(a, b) {
  return a[1] - b[1]
}

export const sort = (arr, order='x') => {
  const sorted1d = [];
  // console.log('points', arr.slice(0, 100))
  const arr2d = split(arr);
  if (order === 'x') {
    arr2d.sort(comparatorX)
  }
  if (order === 'y') {
    arr2d.sort(comararatorY);
  }
  /*
  newnew will be an array where index is the y for cordinate or the horizontal line with y constant
  and the values will be the x coordinates
  [[670, 512, 32, 44, 1300], [256, 82, 567, 1300, 2]]
  here for y = 0, the corresponding x values are [670, 512, 32, 44, 1300]
       for y = 1, the corresponding x values are [256, 82, 567, 1300, 2]
  */
  let num = 0;
  let newnew = [];
  let arrayfornum = [];
  for (let i = 0; i < arr2d.length; i++) {
    // var arrXvalue = arr2d[i][0];
    // var arrYvalue = arr2d[i][1];
    // if (arrYvalue > num) {
    //   if (arrYvalue >= num && arrYvalue < num + 1) {
    //     arrayfornum.push(arrXvalue)
    //   } else {
    //     arrayfornum.sort((a, b) => a - b)
    //     newnew.push(arrayfornum)
    //     arrayfornum = []
    //     num += 1
    //   }
    // }

    // sorted1d.push(arrXvalue);
    // sorted1d.push(arrYvalue);
    var arrXvalue = arr2d[i][0];
    var arrYvalue = arr2d[i][1];
    if (arrXvalue > num) {
      if (arrXvalue >= num && arrXvalue < num + 1) {
        arrayfornum.push(arrYvalue);
      } else {
        arrayfornum.sort((a, b) => a - b);
        newnew.push(arrayfornum);
        arrayfornum = [];
        num += 1;
      }
    }
    sorted1d.push(arrYvalue);
    sorted1d.push(arrXvalue);
  }
  // return placeInDiv(newnew, buffer);
  // console.log('-----------newnew', newnew)
  return newnew;
}

const split = (arr) => {
  const arr2d = [];
  for (let i = 0; i < arr.length; i += 2) {
    let x = arr[i];
    let y = arr[i + 1];
    arr2d.push([x, y]);
  }
  // console.log('--------split', arr2d)
  return arr2d;
}

export const placeInDiv = (arr, tileSize = 20) => {
  let arrayPlaced = [];
  for (let i = 0; i < arr.length; i += tileSize) {
    let subArr = [];
    let currentX = arr[i][0];
    for (let j = 0, n = arr[i].length; j < n; j++) {
      let left = arr[i][j];
      if (left >= currentX) {
        currentX = left + tileSize;
        subArr.push(left)
      }
    }
    arrayPlaced.push(subArr)
  }
  return arrayPlaced;
}