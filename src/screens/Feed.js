import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

const Feed = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={fonts.thin}>Feed Screen</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Details" />
    </View>
  );
};

export default Feed;
