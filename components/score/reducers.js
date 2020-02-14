import { combineReducers } from 'redux';
import { combineActions, handleActions } from 'redux-actions';

import { addSinglePoint } from './actions';
import { points as pointsSelector } from './selectors';
import initialState from './initialState';

const points = handleActions(
  {
    [combineActions(addSinglePoint)]: points => points + 1
  },
  pointsSelector(initialState),
);

export default combineReducers({ points });
