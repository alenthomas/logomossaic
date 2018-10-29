import React, { Component } from 'react';
import lodash from 'lodash';

function isNonMediaData(datum) {
  return datum.content.sections[0].embed.type !== 'media';
}

function createInvestigations(data) {
  return lodash.chain(data)
    .map((datum) => {
      let investigation = {
        'id': datum.id,
        'completed': false,
        'hasBrokenMedia': null
      };

      if(isNonMediaData(datum)) {
        investigation.completed = true;
        investigation.hasBrokenMedia = false;
      }

      return investigation;
    })
    .value();
}

export default class BrokenMediaRemover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'investigations': createInvestigations(this.props.data),
      'childMounted': false
    };
  }

  componentWillMount() {
    this.investigate()
  }

  componentWillReceiveProps(nextProps) {
    const existingInvestigationIds = this.investigationIds();

    const newData = lodash.filter(nextProps.data, (datum) => {
      return !lodash.includes(existingInvestigationIds, datum.id);
    });

    const newInvestigations = createInvestigations(newData);

    this.setState({'investigations' : this.state.investigations.concat(newInvestigations)}, this.investigate);
  }


  markBrokeness(id, hasBrokenMedia) {
    let investigations = this.state.investigations;
    let investigation = lodash.find(investigations, {'id': id})

    investigation.completed = true;
    investigation.hasBrokenMedia = hasBrokenMedia;

    this.setState({'investigations': investigations});
  }

  nonBrokenIds() {
    return lodash.chain(this.state.investigations)
      .filter(['hasBrokenMedia', false])
      .map('id')
      .value();
  }

  nonBrokenData() {
    let ids = this.nonBrokenIds();

    return lodash.filter(this.props.data, (d) => lodash.includes(ids, d.id));
  }

  investigationIds() {
    return lodash.map(this.state.investigations, 'id');
  }

  nonInvestigatedIds() {
    return lodash.chain(this.state.investigations)
      .filter(['completed', false])
      .map('id')
      .value();
  }

  nonInvestigatedData() {
    let ids = this.nonInvestigatedIds();

    return lodash.filter(this.props.data, (d) => lodash.includes(ids, d.id));
  }

  handleChildMount() {
    this.setState({'childMounted': true});
  }

  children() {
    if(this.state.childMounted || lodash.every(this.state.investigations, 'completed')) {
      return React.cloneElement(this.props.children, {data: this.nonBrokenData(), onComponentDidMount: this.handleChildMount.bind(this) });
    }
  }

  investigate() {
    if(!lodash.every(this.state.investigations, 'completed')) {
      this.nonInvestigatedData().forEach((d) => {
        let src = d.content.sections[0].embed.media[0].url;

        fetch(src, { method: 'HEAD' })
          .then(() => this.markBrokeness(d.id, false))
          .catch(() => this.markBrokeness(d.id, true))
      })
    }
  }

  render() {
    return <div>
      {this.children()}
    </div>

  }
};
