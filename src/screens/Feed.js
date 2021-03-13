import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

/**
 *
 * @param {{}} navigation
 */
const Feed = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={fonts.light}>Feed Screen</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Details" />
      <Button
        onPress={() => navigation.navigate('Redux Test')}
        title="Redux Test"
      />
    </View>
  );
};

export default Feed;
