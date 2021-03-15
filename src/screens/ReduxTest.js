import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction } from '../store/actions';

/**
 *
 * @param {{}} navigation
 */
const ReduxTest = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const data = useSelector((state) => state);
  const { counter } = data;
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          flexDirection: 'row',
          width: 200,
          justifyContent: 'space-around',
        }}>
        <Button title="Add" onPress={() => dispatch(addition())} />
        <Text>{counter}</Text>
        <Button title="Subtract" onPress={() => dispatch(subtraction())} />
      </View>
      {/* <Text style={fonts.light}>Redux Test Screen</Text> */}
    </View>
  );
};

export default ReduxTest;
