import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const Details = ({ navigation }) => {
  const { fonts } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={fonts.light}>Details Screen</Text>
    </View>
  );
};

export default Details;
