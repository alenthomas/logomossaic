import lodash from 'lodash';
import {removeLinks} from '../components/mediacarousel/helpers.js';

export const LANDSCAPE_SIZE = 2;
export const POTRAIT_SIZE = 1;
export const ALL_SIZES = [POTRAIT_SIZE, LANDSCAPE_SIZE];

// const TOLERANCE = .5;

// let isWithin = (size, aspectRatio) => {
//   return ((size - TOLERANCE) < aspectRatio)
//     && ((size + TOLERANCE) > aspectRatio);
// }

class Photo {
  constructor(datum) {
    this.raw = datum;
    this.data = datum;
    this.sizes = this.data.media[0].sizes;
    this.fullSize = this.getFullSize();
  }

  getId() {
    return this.data.id;
  }

  getFullSize() {
    try {
      return this.sizes.full;
    } catch (err) {
      return ({w: 1024, h: 1024});
    }
  }

  getAspectRatio() {
    let fullSize = this.getFullSize();
    return fullSize.w / fullSize.h;
  }

  getPhotoUrl() {
    return this.data.media[0].url;
  }

  getSource() {
    try {
      return this.data.source.name.toLowerCase();
    } catch (err) {
      console.error('Error getting source', err);
      return '';
    }
  }

  getThumbnailUrl() {
    return this.data.media[0].url;
  }

  getPhotoSize() {
      let aspectRatio = this.getAspectRatio();
      if (aspectRatio >= 0.7 && aspectRatio <= 1.2) return POTRAIT_SIZE;
      else if (aspectRatio > 1.2) return LANDSCAPE_SIZE;
      return false;
  }

  isLandscape() {
    let photoSize = this.getPhotoSize();
    return photoSize === LANDSCAPE_SIZE;
  }

  isVideo() {
    let photoUrl = this.getPhotoUrl();

    return lodash.includes(photoUrl, ".mp4") || lodash.includes(photoUrl, "video");
  }

  getCreatedAt() {
    return this.data.createdAt;
  }

  getText() {
    return removeLinks(this.data.text);
  }

  getAuthorName() {
    return this.data.author.name || "";
  }

  getAuthorHandle() {
    return this.data.author.alias ? `@${this.data.author.alias}`:  "";
  }

  getAuthorPhoto() {
    return this.data.author.photo;
  }

  transform() {
    return {
      key: this.getId(),
      id: this.getId(),
      createdAt: this.getCreatedAt(),
      url: this.getPhotoUrl(),
      thumbUrl: this.getThumbnailUrl(),
      isVideo: this.isVideo(),
      photoSize: this.getPhotoSize(),
      isLandscape: this.isLandscape(),
      raw: this.raw
    }
  }
}

export default Photo;
