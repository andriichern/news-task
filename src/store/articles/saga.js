import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchArticles() {
  yield put();
}

function* articleSaga() {
  yield takeEvery('action', fetchArticles);
}

export default articleSaga;
