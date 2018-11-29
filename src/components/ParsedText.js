import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parseEmoji, removeLinks } from '../Helper.js';

class ParsedText extends Component {
  render() {
    let CustomTag = this.props.tag || 'div';
    return (
      <CustomTag
        style={this.props.style}
        className={this.props.className}
        dangerouslySetInnerHTML={{ __html: parseEmoji(removeLinks(this.props.data))}}
      />)
  }
}

ParsedText.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string.isRequired,
  tag: PropTypes.string,
  style: PropTypes.object,
};

export default ParsedText;
