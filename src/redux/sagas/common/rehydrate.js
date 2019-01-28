import {
  takeLatest, all, fork, put, take, select, call,
} from 'redux-saga/effects';
import Actions from 'actions';
import Selectors from 'selectors';
import AppNavigationService from 'navigator/app/AppNavigationService';

function* rehydrate() {
  yield put(Actions.finishRehydrate());
}

function* redirectApp() {
  yield take(Actions.FINISH_REHYDRATE);
  const token = yield select(Selectors.getToken);
  if (token !== null) {
    yield call(AppNavigationService.navigate, 'Dashboard');
  } else {
    yield call(AppNavigationService.navigate, 'Auth');
  }
}

function* watchRehydrate() {
  yield takeLatest('persist/REHYDRATE', rehydrate);
}

function* watchRedirectApp() {
  yield takeLatest(Actions.REDIRECT_APP, redirectApp);
}

export default function* persist() {
  yield all([
    fork(watchRehydrate),
    fork(watchRedirectApp),
  ]);
}
