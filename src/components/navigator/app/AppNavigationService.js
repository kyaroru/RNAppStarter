import { NavigationActions } from 'react-navigation';

let myNavigator;

function setTopLevelNavigator(navigatorRef) {
  myNavigator = navigatorRef;
}

function navigate(routeName, params) {
  if (myNavigator) {
    myNavigator.dispatch(NavigationActions.navigate({
      routeName,
      params,
    }));
  }
}

function goBack() {
  if (myNavigator) {
    myNavigator.dispatch(NavigationActions.back());
  }
}

function getCurrentTabIndex() {
  if (myNavigator) {
    return myNavigator.state.nav.routes[2].routes[0].index;
  }
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  getCurrentTabIndex,
};
