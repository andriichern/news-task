import React, { useRef, useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardActionButton,
  CardPrimaryAction,
} from '@rmwc/card';
import { GridCell } from '@rmwc/grid';
import { TextField } from '@rmwc/textfield';
import { Typography } from '@rmwc/typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const maxImgHeight = 240; // This value could be calculated based on image aspect ratio etc.

const ArticlesGridCell = ({
  row = 0,
  column = 0,
  cellSpan = 1,
  title = '',
  imageUrl = '',
  className = '',
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const cellRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [cellWidth, setCellWidth] = useState(0);
  const [cardTitle, setCardTitle] = useState(title);

  useEffect(() => {
    if (cellRef.current) {
      setCellWidth(cellRef.current.offsetWidth);
    }
  }, []);

  const handleChange = event => setCardTitle(event.target.value);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    setIsEdit(false);
    onEdit({ row, column, title: cardTitle });
  };

  const handleDelete = () => {
    onDelete(row, column);
  };

  return (
    <GridCell ref={cellRef} span={cellSpan} className={className}>
      <Card>
        <CardPrimaryAction>
          <LazyLoadImage
            alt={`Photo for ${title}`}
            src={`${imageUrl}&height=${maxImgHeight}&width=${cellWidth}`}
            width={cellWidth}
            height={maxImgHeight}
          />
          {isEdit ? (
            <TextField value={cardTitle} onChange={handleChange} />
          ) : (
            <Typography use="body1" tag="h3" className="card-title">
              {cardTitle}
            </Typography>
          )}
        </CardPrimaryAction>
        <CardActions>
          {isEdit ? (
            <CardActionButton label={'Save'} outlined onClick={handleSave} />
          ) : (
            <CardActionButton label={'Edit'} outlined onClick={handleEdit} />
          )}

          <CardActionButton
            label={'Delete'}
            danger
            raised
            onClick={handleDelete}
          />
        </CardActions>
      </Card>
    </GridCell>
  );
};

ArticlesGridCell.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  cellSpan: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default memo(ArticlesGridCell);
