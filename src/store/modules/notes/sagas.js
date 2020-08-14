import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { loadNotesSuccess, successCreate, successDelete } from './actions';

export function* deleteNote({ payload }) {
    try {
      const { id } = payload;
      yield call(AsyncStorage.removeItem, id);

      yield put(successDelete());
    } catch(error) {
        alert(error);
    }

}

export function* loadNotes() {
  try {
    const keys = yield call(AsyncStorage.getAllKeys);
    const result = yield call([AsyncStorage, "multiGet"], keys);
    const data = [];
    
    result.map(d => data.push(JSON.parse(d[1])));
    yield put(loadNotesSuccess(data));
  } catch(error) {
     console.log(error);
  }

}

export function* createNote({ payload }) {
  try {
    const { slug, data } = payload;

    yield call([AsyncStorage, 'setItem'], slug, JSON.stringify(data));
    yield put(successCreate());

  } catch(error) {
    Alert.alert('Eror', error.message);
  }
}

export default all([
    takeLatest('@notes/CREATE_NOTE_REQUEST', createNote),
    takeLatest('@notes/DELETE_NOTE', deleteNote),
    takeLatest('@notes/REQUEST_LOAD_NOTES', loadNotes)
    
  ]);