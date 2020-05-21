import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from 'store/articles';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return <h3>Select your view</h3>;
};

export default HomePage;
