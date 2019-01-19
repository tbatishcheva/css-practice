import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Label.css';

class Label extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <span className={`label label_color-${this.props.color}`}>{this.props.children}</span>
    );
  }
}

export default Label;
