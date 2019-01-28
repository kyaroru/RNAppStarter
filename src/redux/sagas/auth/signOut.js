import {
  takeLatest, all, fork, call,
} from 'redux-saga/effects';
import Actions from 'actions';
import AppNavigationService from 'navigator/app/AppNavigationService';

function* signOut() {
  yield call(AppNavigationService.navigate, 'Auth');
}

function* watchSignOut() {
  yield takeLatest(Actions.SIGN_OUT, signOut);
}

export default function* auth() {
  yield all([
    fork(watchSignOut),
  ]);
}
