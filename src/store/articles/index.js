import createActions from '../actionCreator';

// constants
const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
const DELETE_ARTICLE = 'DELETE_ARTICLE';

const initialState = [];

// actions
export const updateArticle = (row, column, title = '') => ({
  type: UPDATE_ARTICLE,
  payload: { row, column, title },
});

export const deleteArticle = (row, index) => ({
  type: DELETE_ARTICLE,
  payload: { row, index },
});

// reducer
const articleActions = {
  [UPDATE_ARTICLE]: (draft, { row, column, title }) =>
    (draft[row].columns[column].title = title),
  [DELETE_ARTICLE]: (draft, { row, column }) =>
    draft[row].columns.splice(column, 1),
};

export const articlesReducer = createActions(articleActions)(initialState);
