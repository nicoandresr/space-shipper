import { combineReducers, createStore } from 'redux';

import score from './components/score/reducers';

function setup() {
  return createStore(
    combineReducers({
      score
    })
  );
}

export default setup;
