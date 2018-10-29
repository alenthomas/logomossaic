import lodash from 'lodash';
import React, { Component } from 'react';

import PhotoTileGroup from "./PhotoTileGroup.js";

import Grid from '../../models/Grid.js';

const ROW_COUNT = 3;

const getPhotoTileGroupRef = (rowIdx, groupIdx) => {
  return `ptg${rowIdx}x${groupIdx}`;
}

class PhotoGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: []
    };

    this.selectRandomPhotoTileGroup = this.selectRandomPhotoTileGroup.bind(this);
    this.flipInRandomIntervals = this.flipInRandomIntervals.bind(this);

    this.grid = new Grid(props.data);
  }

  componentDidMount() {
    this.flipInRandomIntervals();
  }

  selectRandomPhotoTileGroup() {
    let randomRow = lodash.random(ROW_COUNT - 1);
    let randomGroupIdx = lodash.random(lodash.size(this.grid.serialize()[randomRow].photoGroups) - 1);

    return getPhotoTileGroupRef(randomRow, randomGroupIdx);
  }

  flipRandom() {
    let randomPicCount = lodash.random(2) + 1;
    let ptgRefs = lodash.uniq(lodash.times(randomPicCount, this.selectRandomPhotoTileGroup));

    lodash.forEach(ptgRefs, (ptgRef) => {
      this.refs[ptgRef].flip();
    });
  }

  flipInRandomIntervals() {
    let randomInterval = lodash.random(2, 5) * 1000;

    this.timeout = setTimeout(() => {
      this.flipRandom();

      this.flipInRandomIntervals();
    }, randomInterval);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getPhotos() {
    var data = this.props.data;

    return lodash.filter(data, (photo) => {
      return !lodash.includes(this.state.hasError, photo.id)
    });
  }

  markAsError(id) {
    this.setState({
      hasError: lodash.concat(this.state.hasError, [id])
    });
  }

  render() {
    this.grid.clearPhotoGroups();
    this.grid.fillPhotoGroups(this.getPhotos());
    let grid = this.grid.serialize();
    let onErrorFn = this.markAsError.bind(this);

    return (
      <div className="grid">
        {
          lodash.map(grid, (row, rowIdx) => (
            <div className="grid-row" key={rowIdx}>
              {
                lodash.map(row.photoGroups, (photoGroup, groupIdx) => (
                  <PhotoTileGroup
                    ref={getPhotoTileGroupRef(rowIdx, groupIdx)}
                    objectFit={this.props.objectFit}
                    onError={onErrorFn}
                    {...photoGroup}/>
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default PhotoGrid;
