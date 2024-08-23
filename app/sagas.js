import { call, put, takeEvery } from 'redux-saga/effects';

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
