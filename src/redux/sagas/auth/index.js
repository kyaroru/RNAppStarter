import { all, fork } from 'redux-saga/effects';
import signIn from './signIn';
import signOut from './signOut';

export default function* auth() {
  yield all([
    fork(signIn),
    fork(signOut),
  ]);
}
