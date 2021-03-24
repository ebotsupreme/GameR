import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider, useDispatch } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Feed } from '../index';
import rootReducer from '../../app/rootReducer';

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

it('render default text', () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({ immutableCheck: false })],
  });
  const wrapper = ({ children }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );
  // const dispatch = useDispatch();
  const screen = render(
    <Provider store={store}>
      <Feed />
    </Provider>,
  );

  screen.getByText('Popular');
});
