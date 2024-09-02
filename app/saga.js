'use strict';

import {
  SAGA_INCREMENT,
  SAGA_DECREMENT,
  SAGA_INCREMENT_EVENT,
  SAGA_DECREMENT_EVENT,
} from '/app/action.js';

const { takeEvery, call, put } = ReduxSaga.effects;

export const delay = (ms) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

function* sagaIncrementHandler(data) {
  yield call(delay, 1000);
  yield put({ ...data, type: SAGA_INCREMENT_EVENT });
}

function* sagaDecrementHandler(data) {
  yield call(delay, 1000);
  yield put({ ...data, type: SAGA_DECREMENT_EVENT });
}

export function* rootSaga() {
  yield takeEvery(SAGA_INCREMENT, sagaIncrementHandler);
  yield takeEvery(SAGA_DECREMENT, sagaDecrementHandler);
}

/* import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchDataSaga() {
  try {
    yield put({ type: 'FETCH_DATA_REQUEST' });
    const response = yield call(fetch, 'https://api.example.com/data');
    const data = yield response.json();
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', payload: error });
  }
}
 */
