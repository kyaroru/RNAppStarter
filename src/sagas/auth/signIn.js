import { takeLatest, all, fork, put, call } from 'redux-saga/effects';
import Actions from 'actions';
import * as api from 'api';

function* signIn({ credentials }) {
  try {
    const token = yield call(api.signIn, credentials);
    if (token) {
      yield put(Actions.signInSuccess(token));
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
