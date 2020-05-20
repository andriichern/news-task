import React from 'react';
import { useSelector } from 'react-redux';
import { articleDataSelector } from 'store/articles/selectors';
import ArticlesGrid from 'components/articles/ArticlesGrid';
import 'styles/articles.scss';

const GridPage = () => {
  const articleData = useSelector(articleDataSelector);

  return <ArticlesGrid articlesData={articleData} />;
};

export default GridPage;
