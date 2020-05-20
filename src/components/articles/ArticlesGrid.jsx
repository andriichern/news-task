import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Grid } from '@rmwc/grid';
import { Snackbar, SnackbarAction } from '@rmwc/snackbar';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import { updateArticle, deleteArticle } from 'store/articles';
import ArticlesGridCell from './ArticlesGridCell';

import '@rmwc/card/styles';
import '@rmwc/grid/styles';
import '@rmwc/button/styles';
import '@rmwc/snackbar/styles';
import '@rmwc/textfield/styles';
import '@rmwc/typography/styles';

const REVERT_ACTION = 'revert';
const DISMISS_ACTION = 'dismiss';

const ArticlesGrid = ({ articlesData }) => {
  const dispatch = useDispatch();
  const [toDelete, setToDelete] = useState({});
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const handleDelete = (row, column) => {
    console.log(row, column);
    setToDelete({ row, column });
    setIsNotificationShown(true);
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
              row={rowIndex}
              column={columnIndex}
              cellSpan={width}
              title={title}
              imageUrl={imageUrl}
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
