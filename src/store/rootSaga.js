import { all } from 'redux-saga/effects';
import articleSaga from './articles/saga';

export default function* rootSaga() {
  yield all([articleSaga]);
}
