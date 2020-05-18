import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';
import '@material/ripple/dist/mdc.ripple.css';

const ArticlesList = ({ articles }) => {
  return (
    <div>
      <List>
        {articles.map((article, index) => (
          <ListItem key={index}>{article}</ListItem>
        ))}
      </List>
    </div>
  );
};

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticlesList;
