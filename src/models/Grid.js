import lodash from 'lodash';

const ROW_CAPACITY = 6;

import {ALL_SIZES} from "./Photo.js";

class Grid {
  constructor(photos) {
    this.photos = photos;

    this.initializeLayout();

    this.fillPhotoGroups(this.photos);
  }

  initializeLayout() {
    this.grid = [
      {
        size: 0,
        photoGroups: []
      },
      {
        size: 0,
        photoGroups: []
      },
      {
        size: 0,
        photoGroups: []
      }
    ];

    lodash.forEach(this.photos, (photo) => this.fitPhoto(photo));
  }

  clearPhotoGroups() {
    lodash.forEach(this.grid, (row) => {
      lodash.forEach(row.photoGroups, (photoGroup) => {
        photoGroup.photos = [];
      });
    });
  }

  fitPhoto(photo) {
    lodash.forEach(this.grid, (row, idx) => {
      let newSize = row.size + photo.photoSize;
      let canFit = newSize <= ROW_CAPACITY;

      if(canFit) {
        row.photoGroups.push({
          photos: [],
          id: `photo-group-${idx}-${newSize}`,
          key: lodash.size(row.photoGroups) + 1,
          photoSize: photo.photoSize
        });
        row.size = newSize;

        return false; // break -> We have fit the photo in one of the grids
      }
    });
  }

  getCountByGridLayout = () => {
    return lodash(this.grid).map((row) => {
      let photoGroups = row.photoGroups;

      return lodash(photoGroups).map((photoGroup) => photoGroup.photoSize).value();
    }).flattenDepth(2).countBy().value();
  }

  hasEmptyPhotoGroups() {
    return lodash(this.grid).some((row) => {
      return lodash(row.photoGroups).some((photoGroup) => {
        return lodash.isEmpty(photoGroup.photos);
      });
    });
  }

  fillPhotoGroups(allPhotos) {
    this.photos = allPhotos;

    let countByGridLayout = this.getCountByGridLayout();
    let countBySizeNotInGrid = lodash.countBy(allPhotos, 'photoSize');

    let chunkedPhotosPerGroup = lodash(ALL_SIZES).reduce((memo, photoSize) => {
      let countInGrid = countByGridLayout[photoSize] || 0;
      let countNotInGrid = countBySizeNotInGrid[photoSize] || 0;

      let countPerGroup = Math.floor(countNotInGrid / countInGrid);
      let photosInSize = lodash.filter(allPhotos, (photo) => photo.photoSize === photoSize);

      memo[photoSize] = lodash.chunk(photosInSize, countPerGroup);

      return memo;
    }, {});


    lodash(this.grid).forEach((row) => {
      lodash(row.photoGroups).forEach((photoGroup) => {
        let nextSetOfPhotos = chunkedPhotosPerGroup[photoGroup.photoSize].shift();
        if(!lodash.isEmpty(nextSetOfPhotos) && !lodash.isUndefined(nextSetOfPhotos)) {
          photoGroup.photos = lodash.concat(photoGroup.photos, nextSetOfPhotos);
        }
      });
    });

    if(this.hasEmptyPhotoGroups()) {
      this.initializeLayout();
      this.fillPhotoGroups(allPhotos);
    }
  }

  serialize() {
    return this.grid;
  }
}

export default Grid;
