import produce from 'immer';

const handleActions = actions => defaultState =>
  produce(
    (draft, { type, payload }) =>
      actions[type] && actions[type](draft, payload),
    defaultState
  );

export default handleActions;
