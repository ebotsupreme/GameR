import React from 'react';
import { Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from './counterSlice';

const Counter = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Text>value: {value}</Text>
      <Button
        title="increment"
        onPress={() => {
          dispatch(increment(1));
        }}>
        {' '}
        +1{' '}
      </Button>
      <Button
        title="decrement"
        onPress={() => {
          dispatch(decrement(1));
        }}>
        {' '}
        -1{' '}
      </Button>
    </>
  );
};

export default Counter;
