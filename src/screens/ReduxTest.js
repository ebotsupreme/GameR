import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

import database from '@react-native-firebase/database';

/**
 *
 * @param {{}} navigation
 */
const ReduxTest = ({ navigation }) => {
  const { colors, fonts } = useTheme();

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
      <Button title="Write User Data" onPress={() => writeUserData()} />
    </View>
  );
};

export default ReduxTest;
