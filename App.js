import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';

import GameBoard from './components/gameBoard';
import setupStore from './configureStore.js';

export default function ConectedApp() {
  return (
    <Provider store={setupStore()}>
      <GameBoard />
    </Provider>
  );
}
