import React from 'react';
import AppNavigator from './AppNavigator';
import AppNavigationService from './AppNavigationService';

class App extends React.Component {
  render() {
    return (
      <AppNavigator
        ref={(navigatorRef) => {
          AppNavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default App;
