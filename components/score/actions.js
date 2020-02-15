import { createActions } from 'redux-actions';

const namespace = 'game-score';

export const ADD_SINGLE_POINT = `${namespace}/ADD_SINGLE_POINT`;

export const { addSinglePoint } = createActions({
  ADD_SINGLE_POINT: (points = 0) => ({ points })
});
