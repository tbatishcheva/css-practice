import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

class Product extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      cutShape: PropTypes.object,
      price: PropTypes.number,
      pricePerCarat: PropTypes.number,
    }).isRequired,
    productSize: PropTypes.number.isRequired,
    isShowProductDescription: PropTypes.bool.isRequired,
    handleProductClick: PropTypes.func,
  };

  static defaultProps = {
    handleProductClick: null,
  }

  render() {
    return (
      <div className={`product product__size-${this.props.productSize}`} onClick={() => this.props.handleProductClick(this.props.product.id)} role="presentation">
        <div className="product__img">
          <iframe key={this.props.productSize} title="video" src={`https://staging.cutwise.com/widget/video/${this.props.product.id}`} className={`product__img-item product__img-item_size-${this.props.productSize}`}>Video</iframe>
        </div>
        {this.props.isShowProductDescription && (
        <div className={`product__description product__description_size-${this.props.productSize}`}>
          <div>{this.props.product.description} {this.props.product.cutShape ? `, ${this.props.product.cutShape.title}` : ''}</div>
          {this.props.product.price && (
            <div className="product__prices">
              <div className="product__price">${this.props.product.price}</div>
              <div className="product__pricePerCarat">${this.props.product.pricePerCarat}/ct</div>
            </div>
          )}
        </div>
        )}
      </div>
    );
  }
}

export default Product;
