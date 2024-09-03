'use strict';

import {
  SAGA_INCREMENT,
  SAGA_DECREMENT,
  BLOCK_BUTTONS_ACTION,
} from '/app/action.js';

const { takeEvery, call, put } = ReduxSaga.effects;

export const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

function* sagaIncrementHandler(data) {
  yield put({ type: BLOCK_BUTTONS_ACTION, payload: true });
  yield call(delay, 1000);
  yield put({ ...data, type: `${SAGA_INCREMENT}_ACTION` });
  yield put({ type: BLOCK_BUTTONS_ACTION, payload: false });
}

function* sagaDecrementHandler(data) {
  yield put({ type: BLOCK_BUTTONS_ACTION, payload: true });
  yield call(delay, 1000);
  yield put({ ...data, type: `${SAGA_DECREMENT}_ACTION` });
  yield put({ type: BLOCK_BUTTONS_ACTION, payload: false });
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
