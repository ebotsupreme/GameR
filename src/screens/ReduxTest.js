import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction } from '../store/actions';

import database from '@react-native-firebase/database';

/**
 *
 * @param {{}} navigation
 */
const ReduxTest = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const data = useSelector((state) => state);
  const { counter } = data;
  const dispatch = useDispatch();

  const db = database();
  console.log('db', db);

  // write db
  const writeUserData = (
    userId = 1,
    name = 'jamesmelo',
    email = 'jamesm@gmail.com',
  ) => {
    database().ref(`users/${userId}`).set({
      username: name,
      email,
    });
  };

  // data base test start READ -
  const userId = 1;
  database()
    .ref(`/users/${userId}`)
    .once('value')
    .then((snapshot) => {
      console.log('User data: ', snapshot.val());
    });

  // data base test end

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

      <Button title="Write User Data" onPress={() => writeUserData()} />

      {/* <Text style={fonts.light}>Redux Test Screen</Text> */}
    </View>
  );
};

export default ReduxTest;
