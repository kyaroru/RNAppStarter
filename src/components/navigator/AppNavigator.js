import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Initial from 'containers/Initial';
import Auth from 'containers/Auth';
import Dashboard from 'containers/Dashboard';

const routeConfiguration = {
  Initial: { screen: Initial },
  Auth: { screen: Auth },
  Dashboard: { screen: Dashboard },
};

const AppNavigator = createSwitchNavigator(routeConfiguration);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
