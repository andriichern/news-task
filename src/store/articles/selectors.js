import { createSelector } from 'reselect';

const articlesSelector = state => state.articles;

const articleTitle = article => article.title;

export const articleDataSelector = createSelector(
  articlesSelector,
  rows => rows
);

export const articleTitleSelector = createSelector(articlesSelector, rows =>
  rows.reduce(
    (result, currRow) => result.concat(currRow.columns.map(articleTitle)),
    []
  )
);
