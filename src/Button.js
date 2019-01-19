import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    withMargin: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    withMargin: false,
    onClick: null,
    children: null,
  }

  render() {
    return (
      <button type="button" className={`button button_color-${this.props.color} ${this.props.withMargin ? 'button_with-margin' : ''}`} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}

export default Button;
