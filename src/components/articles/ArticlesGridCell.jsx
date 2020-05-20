import React, { useRef, useState, useLayoutEffect } from 'react';
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
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const cellRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [cellWidth, setCellWidth] = useState(0);
  const [cardTitle, setCardTitle] = useState(title);

  useLayoutEffect(() => {
    if (cellRef.current) {
      setCellWidth(cellRef.current.offsetWidth);
    }
  }, []);

  const handleChange = event => {
    setCardTitle(event.target.value);
  };

  const handleSave = () => {
    setIsEdit(false);
    onEdit(row, column, cardTitle);
  };

  return (
    <GridCell ref={cellRef} span={cellSpan}>
      <Card>
        <CardPrimaryAction>
          <LazyLoadImage
            alt={`Photo for ${title}`}
            // effect="opacity"
            src={`${imageUrl}&height=${maxImgHeight}&width=${cellWidth}`}
            width={cellWidth}
            height={maxImgHeight}
          />
          {isEdit ? (
            <TextField value={cardTitle} onChange={handleChange} />
          ) : (
            <Typography use="body1" tag="h3" style={{ padding: '0 8px' }}>
              {cardTitle}
            </Typography>
          )}
        </CardPrimaryAction>
        <CardActions>
          {isEdit ? (
            <CardActionButton label={'Save'} outlined onClick={handleSave} />
          ) : (
            <CardActionButton
              label={'Edit'}
              outlined
              onClick={() => setIsEdit(true)}
            />
          )}

          <CardActionButton
            label={'Delete'}
            danger
            raised
            onClick={() => onDelete(row, column)}
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
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ArticlesGridCell;
