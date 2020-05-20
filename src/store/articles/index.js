import handleActions from '../actionCreator';

// constants
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
const PUT_ARTICLES = 'PUT_ARTICLES';
const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
const DELETE_ARTICLE = 'DELETE_ARTICLE';

// actions
export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
});

export const putArticles = payload => ({
  type: PUT_ARTICLES,
  payload,
});

export const updateArticle = (row, column, title = '') => ({
  type: UPDATE_ARTICLE,
  payload: { row, column, title },
});

export const deleteArticle = (row, column) => ({
  type: DELETE_ARTICLE,
  payload: { row, column },
});

// reducer
const defaultState = [];
const articleActions = {
  [PUT_ARTICLES]: (draft, payload) => payload,
  [UPDATE_ARTICLE]: (draft, { row, column, title }) => {
    draft[row].columns[column].title = title;
  },
  [DELETE_ARTICLE]: (draft, { row, column }) => {
    draft[row].columns.splice(column, 1);
  },
};

export const articlesReducer = handleActions(articleActions)(defaultState);
