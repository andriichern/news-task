import React, { useState, useCallback } from 'react';
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

const defaultState = {
  showNotification: false,
  articleToDelete: null,
};

const isHidden = (objToDelete, row, column) =>
  objToDelete && objToDelete.row === row && objToDelete.column === column;

const ArticlesGrid = ({ articlesData }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultState);

  const handleDelete = useCallback((row, column) => {
    setState({
      showNotification: true,
      articleToDelete: { row, column },
    });
  }, []);

  const handleEdit = useCallback((row, column, title) => {
    dispatch(updateArticle(row, column, title));
  }, []);

  const handleSnackbarClose = ({ detail: { reason } }) => {
    if (reason === DISMISS_ACTION) {
      dispatch(deleteArticle(state.articleToDelete));
    }

    setState({
      showNotification: false,
      articleToDelete: null,
    });
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
                hidden: isHidden(state.articleToDelete, rowIndex, columnIndex),
              })}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </Grid>
      <Snackbar
        open={state.showNotification}
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
