import {
  takeLatest, all, fork, put, call,
} from 'redux-saga/effects';
import Actions from 'actions';
import * as api from 'api';
import AppNavigationService from 'navigator/app/AppNavigationService';

function* signIn({ credentials }) {
  try {
    const token = yield call(api.signIn, credentials);
    if (token) {
      yield put(Actions.signInSuccess(token));
      yield call(AppNavigationService.navigate, 'Dashboard');
    }
  } catch (error) {
    yield put(Actions.signInFail(error));
  }
}

function* watchSignIn() {
  yield takeLatest(Actions.SIGN_IN, signIn);
}

export default function* auth() {
  yield all([
    fork(watchSignIn),
  ]);
}
