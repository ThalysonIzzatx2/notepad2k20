import { all } from 'redux-saga/effects';

import notes from './notes/sagas';

export default function* rootSaga() {
  return yield all([notes]);
}