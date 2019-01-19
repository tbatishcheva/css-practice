import React, { Component } from 'react';
import './Description.css';
import iconShare from './iconShare.svg';
import Label from './Label';
import Button from './Button';

class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="description__main-text">
          DiBox 2.0 Fire Metric and something else
        </div>
        <div className="description__label">
          <Label color="green">Published</Label>
        </div>
        <div className="description__text">
        A brilliant is a diamond or other gemstone cut in a particular form with numerous facets so
        as to have exceptional brilliance. The shape resembles that of a cone and provides maximized
        light return through the top of the diamond.
        </div>
        <div className="description__buttons">
          <Button withMargin color="gray">Copy</Button>
          <Button color="gray"><img alt="Share" src={iconShare} /></Button>
        </div>
      </div>
    );
  }
}

export default Description;
