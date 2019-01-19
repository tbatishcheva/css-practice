import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Button from './Button';
import AppStore from './stores/AppStore';
import iconMenu from './iconMenu.svg';
import './Header.css';

class Header extends Component {
  static propTypes = {
    appStore: PropTypes.instanceOf(AppStore),
  };

  static defaultProps = {
    appStore: null,
  }

  render() {
    return (
      <header className="header">
        <div className="header__burger-menu">
          <Button color="gray" onClick={() => this.props.appStore.toggleActiveMenu()}> <img alt="Menu" src={iconMenu} />     </Button>
        </div>
        <div className="header__logo">
          <img alt="Cutwise" src={logo} className="header__logo-item" />
        </div>
        <div className="header__menu">
          <a className="header__menu-item" href="https://cutwise.com/catalog/diamond-colorless">Colorless</a>
          <a className="header__menu-item" href="https://cutwise.com/~qyr3">Fancy</a>
          <a className="header__menu-item" href="https://cutwise.com/~qyr3">Rough</a>
          <a className="header__menu-item header__menu-item_active" href="https://cutwise.com/~qyr3">Collections</a>
          <a className="header__menu-item" href="https://cutwise.com/~qyr3">About</a>
        </div>
        <div className="header__log-in">
          <a className="header__log-in-item" href="https://cutwise.com/~qyr3">Log in</a>
        </div>
        {this.props.appStore.isActiveMenu && (
          <div className="header__short-menu">
            <a className="header__short-menu-item" href="https://cutwise.com/catalog/diamond-colorless">Colorless</a>
            <a className="header__short-menu-item" href="https://cutwise.com/~qyr3">Fancy</a>
            <a className="header__short-menu-item" href="https://cutwise.com/~qyr3">Rough</a>
            <a className="header__short-menu-item" href="https://cutwise.com/~qyr3">Collections</a>
            <a className="header__short-menu-item" href="https://cutwise.com/~qyr3">About</a>
            <div className="header__short-menu-item-separator" />
            <a className="header__short-menu-item" href="https://cutwise.com/~qyr3">Log in</a>
          </div>
        )}
      </header>
    );
  }
}

const ObservedHeader = inject('appStore')(observer(Header));

export default ObservedHeader;
