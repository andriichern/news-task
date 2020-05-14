import produce from 'immer';

const createActions = actions => (initialState = null) =>
  produce((draft, action) => {
    const { type, payload } = action;

    if (actions[type]) {
      actions[type](draft, payload);
    }
  }, initialState);

export default createActions;
