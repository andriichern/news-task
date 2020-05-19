import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { GridCell } from '@rmwc/grid';
import ArticleCard from './ArticleCard';

const ArticlesGridCell = ({ cellSpan, title, imageUrl }) => {
  const cellRef = useRef();
  const [cellWidth, setCellWidth] = useState(0);

  useLayoutEffect(() => {
    if (cellRef.current) {
      setCellWidth(cellRef.current.offsetWidth);
    }
  }, []);

  return (
    <GridCell ref={cellRef} span={cellSpan}>
      <ArticleCard cellWidth={cellWidth} title={title} imageUrl={imageUrl} />
    </GridCell>
  );
};

ArticlesGridCell.propTypes = {
  cellSpan: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ArticlesGridCell;
