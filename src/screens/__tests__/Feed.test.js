import React from 'react';
import { render } from '@testing-library/react-native';

import Feed from '../index';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

it('render default text', () => {
  const screen = render(<Feed />);

  screen.getByText('Popular');
});
