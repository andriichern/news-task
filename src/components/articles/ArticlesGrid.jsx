import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@rmwc/grid';
import { useDispatch } from 'react-redux';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import { updateArticle, deleteArticle } from 'store/articles';
import ArticlesGridCell from './ArticlesGridCell';

import '@rmwc/card/styles';
import '@rmwc/grid/styles';
import '@rmwc/button/styles';
import '@rmwc/textfield/styles';
import '@rmwc/typography/styles';
// import 'react-lazy-load-image-component/src/effects/opacity.css';

const ArticlesGrid = ({ articlesData }) => {
  const dispatch = useDispatch();

  const handleDelete = (row, column) => {
    console.log('Delete');
    // dispatch(deleteArticle(row, column))
  };

  return (
    <Grid fixedColumnWidth>
      {articlesData.map(({ columns }, rowIndex) =>
        columns.map(({ width, title, imageUrl }, columnIndex) => (
          <ArticlesGridCell
            key={columnIndex}
            row={rowIndex}
            column={columnIndex}
            cellSpan={width}
            title={title}
            imageUrl={imageUrl}
            onEdit={(row, column, title) =>
              dispatch(updateArticle(row, column, title))
            }
            onDelete={() => console.log('Delete')}
          />
        ))
      )}
    </Grid>
  );
};

ArticlesGrid.propTypes = {
  articlesData: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          width: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          imageUrl: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default trackWindowScroll(ArticlesGrid);
