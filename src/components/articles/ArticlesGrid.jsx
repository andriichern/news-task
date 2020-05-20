import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid } from '@rmwc/grid';
import { Snackbar, SnackbarAction } from '@rmwc/snackbar';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import { updateArticle, deleteArticle } from 'store/articles';
import ArticlesGridCell from './ArticlesGridCell';

const REVERT_ACTION = 'revert';
const DISMISS_ACTION = 'dismiss';

const ArticlesGrid = ({ articlesData }) => {
  const dispatch = useDispatch();
  const [toDelete, setToDelete] = useState({});
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const handleDelete = (row, column) => {
    setIsNotificationShown(true);
    setToDelete({ row, column });
  };

  const handleSnackbarClose = ({ detail: { reason } }) => {
    if (reason === DISMISS_ACTION) {
      dispatch(deleteArticle(toDelete));
    }

    setToDelete({});
    setIsNotificationShown(false);
  };

  return (
    <>
      <Grid fixedColumnWidth>
        {articlesData.map(({ columns }, rowIndex) =>
          columns.map(({ width, title, imageUrl }, columnIndex) => (
            <ArticlesGridCell
              key={title}
              title={title}
              row={rowIndex}
              cellSpan={width}
              imageUrl={imageUrl}
              column={columnIndex}
              className={clsx({
                hidden:
                  toDelete &&
                  toDelete.row === rowIndex &&
                  toDelete.column === columnIndex,
              })}
              onEdit={(row, column, title) =>
                dispatch(updateArticle(row, column, title))
              }
              onDelete={handleDelete}
            />
          ))
        )}
      </Grid>
      <Snackbar
        open={isNotificationShown}
        onClose={handleSnackbarClose}
        message="Article deleted"
        dismissesOnAction
        stacked
        action={[
          <SnackbarAction
            key={REVERT_ACTION}
            action={REVERT_ACTION}
            label={'Revert'}
          />,
          <SnackbarAction
            key={DISMISS_ACTION}
            action={DISMISS_ACTION}
            label={'Dismiss'}
            danger
          />,
        ]}
        timeout={3000}
      />
    </>
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
