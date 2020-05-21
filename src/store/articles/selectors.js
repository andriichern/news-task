import { createSelector } from 'reselect';
import { map, concat } from 'utils/array';
import { pipe } from 'utils/fn';

const articlesSelector = state => state.articles;

const articleTitle = article => article.title;

export const articleDataSelector = createSelector(
  articlesSelector,
  rows => rows
);

export const articleTitleSelector = createSelector(articlesSelector, rows =>
  rows.reduce(
    (result, currRow) =>
      pipe(map(articleTitle), concat(result))(currRow.columns),
    []
  )
);
