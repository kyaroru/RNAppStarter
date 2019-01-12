import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import App from './app';

class Main extends Component {
  componentWillMount() {
    const onComplete = () => {
      console.log('[Rehydrate] Complete');
    };
    const { store } = configureStore(onComplete);
    this.store = store;
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

export default Main;
