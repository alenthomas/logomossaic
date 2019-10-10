import lodash from 'lodash';

class RainFocusSession {
  constructor(data) {
    this.item = data;
  }
  getSessionId() {
    return lodash.get(lodash.first(this.item.times), 'sessionID');
  }
  getSessionTitle() {
    return this.item.title;
  }
  getSessionAbstract() {
    return this.item.abstract;
  }
  getTime() {
    return lodash.get(lodash.first(this.item.times), 'time');
  }
  getRoom() {
    return lodash.get(lodash.first(this.item.times), 'room', '');
  }
  getDate() {
    return lodash.get(lodash.first(this.item.times), 'date');
  }
  getCapacity() {
    return lodash.get(lodash.first(this.item.times), 'capacity');
  }
  getStartTime() {
    return lodash.get(lodash.first(this.item.times), 'startTimeFormatted');
  }
  getEndTime() {
    return lodash.get(lodash.first(this.item.times), 'endTimeFormatted');
  }
  totalSessionTime() {
    return lodash.get(lodash.first(this.item.times), 'length');
  }
}

export default RainFocusSession;

export class RainFocusSessionSimplified {
  constructor(data) {
    this.session = data;
  }
  getSessionId() {
    return lodash.get(this.session, 'sessionID', '');
  }
  getSessionType() {
    return lodash.get(this.session, 'sessionType', '');
  }
  getEventName() {
    return lodash.get(this.session, 'eventName', '');
  }
  getSessionCode() {
    return lodash.get(this.session, 'sessionCode', '');
  }
  getSessionTitle() {
    return lodash.get(this.session, 'sessionTitle', 'TBA');
  }

  getAuthors() {
    return lodash.get(this.session, 'author', [{fullName: 'TBA', jobTitle:'', companyName: ''}]);
  }
  getRoom() {
    return lodash.get(lodash.get(this.session, 'room'), 'name', 'TBA');
  }
  getDate() {
    return lodash.get(lodash.get(this.session, 'time'), 'date');
  }
  getCapacity() {
    return lodash.get(lodash.get(this.session, 'room'), 'capacity', 0);
  }
  getStartTime() {
    return lodash.get(lodash.get(this.session, 'time'), 'startTime');
  }
  getEndTime() {
    return lodash.get(lodash.get(this.session, 'time'), 'endTime');
  }
  getSessionDuration() {
    return lodash.get(lodash.get(this.session, 'time'), 'duration', 0);
  }
  extractContent(s) {
    const span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };
}