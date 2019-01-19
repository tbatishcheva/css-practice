import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import Product from './Product';
import AppStore from './stores/AppStore';
import './ProductList.css';

const ProductList = class ProductList extends Component {
  static propTypes = {
    appStore: PropTypes.instanceOf(AppStore).isRequired,
  };

  render() {
    if (this.props.appStore.bigProducts === null) {
      return null;
    }
    return (
      <div className={`product-list product-list_size-${this.props.appStore.productSize}`}>
        {this.props.appStore.bigProducts.map(product => (
          <Product
            product={product}
            productSize={this.props.appStore.productSize}
            isShowProductDescription={this.props.appStore.isShowProductDescription}
            key={product.id}
            handleProductClick={this.props.appStore.handleProductClick}
          />
        ))}
      </div>
    );
  }
};

const ObservedProductList = inject('appStore')(observer(ProductList));

export default ObservedProductList;
