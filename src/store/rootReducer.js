import { combineReducers } from 'redux';
import { articlesReducer } from './articles';

const rootReducer = combineReducers({
  articlesReducer,
});

export default rootReducer;
