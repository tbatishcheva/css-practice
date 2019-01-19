import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import AppStore from './stores/AppStore';
import * as serviceWorker from './serviceWorker';
import './index.css';

const appStore = new AppStore();
appStore.auth().then(appStore.fetchProductsWithAuth);

ReactDOM.render(<Provider appStore={appStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
