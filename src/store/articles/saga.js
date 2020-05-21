import { call, put, takeEvery } from 'redux-saga/effects';

import { ArticlesApi } from 'api';
import { FETCH_ARTICLES, putArticles } from './index';
import { unwrapFirst } from 'utils/array';

function* fetchArticles() {
  const { data } = yield call(ArticlesApi.getArticles);

  yield put(putArticles(unwrapFirst(data)));
}

function* articleSaga() {
  yield takeEvery(FETCH_ARTICLES, fetchArticles);
}

export default articleSaga;
