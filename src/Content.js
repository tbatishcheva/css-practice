import React, { Component } from 'react';
import ProductList from './ProductList';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <ProductList />
      </div>
    );
  }
}

export default Content;
