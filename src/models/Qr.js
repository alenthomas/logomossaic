class QrLeaders {
  constructor(datum) {
    this.raw = datum;
    this.name = this.getName();
    this.scans = this.getScans();
    this.id = this.getId();
  };
  getName() {
    try {
      const regex = /Name\s*/gi;
      return this.raw.title.replace(regex, '')
    } catch (err) {
      console.error('Error getting name from api: ', err);
      return '';
    }
  }
  getScans() {
    try {
     return parseInt(this.raw.scans, 10);
    } catch (err) {
      console.error('Error getting scans from api: ', err);
      return 0;
    }
  }
  getId() {
    try {
      return this.raw.id;
    } catch (err) {
      console.error('Error getting id from api: ', err);
      return '';
    }
  }
}

export default QrLeaders;