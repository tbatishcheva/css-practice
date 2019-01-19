import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Button from './Button';
import iconDescriptionOn from './iconDescriptionOn.svg';
import iconViewSmall from './iconViewSmall.svg';
import iconViewLittle from './iconViewLittle.svg';
import iconViewBig from './iconViewBig.svg';
import AppStore from './stores/AppStore';
import './Actions.css';

class Actions extends Component {
    static propTypes = {
      appStore: PropTypes.instanceOf(AppStore).isRequired,
    };

    render() {
      return (
        <div className="actions">
          <div className="actions__view">
            <Button onClick={() => this.props.appStore.toggleShowProductDescription()} color="gray"><img alt="Share" src={iconDescriptionOn} /></Button>
          </div>
          <div className="actions__size">
            <Button withMargin onClick={() => this.props.appStore.changeProductSize(160)} color="gray"><img alt="Share" src={iconViewLittle} /></Button>
            <Button withMargin onClick={() => this.props.appStore.changeProductSize(320)} color="gray"><img alt="Share" src={iconViewSmall} /></Button>
            <Button withMargin onClick={() => this.props.appStore.changeProductSize(480)} color="gray"><img alt="Share" src={iconViewBig} /></Button>
          </div>
        </div>
      );
    }
}

const ObservedActions = inject('appStore')(observer(Actions));

export default ObservedActions;
