import React from 'react';
import AppNavigator from 'navigator/AppNavigator';
import AppNavigationService from 'navigator/AppNavigationService';

const App = () => (
  <AppNavigator
    ref={(navigatorRef) => {
      AppNavigationService.setTopLevelNavigator(navigatorRef);
    }}
  />
);

export default App;
