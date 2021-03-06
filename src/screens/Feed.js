import React from 'react';
import { View, Text, Button } from 'react-native';

const Feed = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Details" />
    </View>
  );
};

export default Feed;
