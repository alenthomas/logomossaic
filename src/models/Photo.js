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
    this.embed = datum.content.sections[0].embed;
    this.sizes = this.embed.media[0].sizes;
    this.fullSize = this.sizes.full;
  }

  getId() {
    return this.embed.id;
  }

  getFullSize() {
    return this.sizes.full;
  }

  getAspectRatio() {
    let fullSize = this.getFullSize();

    return fullSize.w / fullSize.h;
  }

  getPhotoUrl() {
    return this.embed.media[0].url;
  }

  getThumbnailUrl() {
    return this.embed.media[0].thumbUrl;
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
    return this.embed.createdAt;
  }

  getText() {
    return removeLinks(this.embed.text);
  }

  getAuthorName() {
    return this.embed.author.name || "";
  }

  getAuthorHandle() {
    return `@${this.embed.author.alias}` || "";
  }

  getAuthorPhoto() {
    return this.embed.author.photo;
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
