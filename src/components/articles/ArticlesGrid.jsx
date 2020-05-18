import React from 'react';
import PropTypes from 'prop-types';
// import {
//   ImageList,
//   ImageListItem,
//   ImageListImage,
//   ImageListLabel,
//   ImageListSupporting,
// } from '@rmwc/image-list';
import { Grid, GridCell } from '@rmwc/grid';

import '@material/layout-grid/dist/mdc.layout-grid.css';

const ArticlesGrid = ({ articlesData }) => {
  return (
    <div>
      {articlesData.map(({ columns }, rowIndex) => (
        <Grid key={rowIndex}>
          {columns.map(({ width, title, imageUrl }, cellIndex) => (
            <GridCell
              key={cellIndex}
              span={width}
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              {title}
            </GridCell>
          ))}
        </Grid>
      ))}
    </div>
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

export default ArticlesGrid;
