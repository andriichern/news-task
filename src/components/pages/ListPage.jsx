import React from 'react';
import { useSelector } from 'react-redux';
import { articleTitleSelector } from 'store/articles/selectors';
import ArticlesList from 'components/articles/ArticlesList';

const ListPage = () => {
  const articles = useSelector(articleTitleSelector);

  return <ArticlesList articles={articles} />;
};

export default ListPage;
