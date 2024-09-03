'use strict';

import { SAGA_INCREMENT, SAGA_DECREMENT } from '/app/action.js';

const { takeEvery, call, put } = ReduxSaga.effects;

export const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

function* sagaIncrementHandler(data) {
  yield call(delay, 1000);
  yield put({ ...data, type: `${SAGA_INCREMENT}_ACTION` });
}

function* sagaDecrementHandler(data) {
  yield call(delay, 1000);
  yield put({ ...data, type: `${SAGA_DECREMENT}_ACTION` });
}

export function* rootSaga() {
  yield takeEvery(SAGA_INCREMENT, sagaIncrementHandler);
  yield takeEvery(SAGA_DECREMENT, sagaDecrementHandler);
}

/*
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
