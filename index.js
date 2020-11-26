
// Dependencies
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

//Components
import App from './App';

import {name as appName} from './app.json';
import store from './src/redux/store'; // Redux store

console.reportErrorsAsExceptions = false; // Handling 3 finger crash
console.disableYellowBox = true; // Remove this to see warnings


export default class Root extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Root);
