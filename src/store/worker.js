import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { expose } from 'comlink';
import rootReducer from './rootReducer';
import sagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

expose(store);
