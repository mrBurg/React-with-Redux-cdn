'use strict';

import { SAGA_INCREMENT, SAGA_DECREMENT } from '/app/action.js';

const { takeEvery, call } = ReduxSaga.effects;

export const delay = (ms) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const sagaIncrementHandler = (data) => {
  console.log(data);
};

const sagaDecrementHandler = (data) => {
  console.log(data);
};

export function* rootSaga() {
  yield call(delay, 1000);
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

function* watchFetchData() {
  yield takeEvery('FETCH_DATA', fetchDataSaga);
}

export default function* rootSaga() {
  yield watchFetchData();
}
 */
