import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@rmwc/grid';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import ArticlesGridCell from './ArticlesGridCell';
import '@material/layout-grid/dist/mdc.layout-grid.css';

const ArticlesGrid = ({ articlesData }) => {
  return (
    <Grid fixedColumnWidth>
      {articlesData.map(({ columns }) =>
        columns.map(({ width, title, imageUrl }, cellIndex) => (
          <ArticlesGridCell
            key={cellIndex}
            cellSpan={width}
            title={title}
            imageUrl={imageUrl}
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
