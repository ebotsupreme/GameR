import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';

/**
 *
 * @param {{}} navigation
 */
const Details = (props) => {
  const { fonts } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text style={fonts.light}>
          Details Screen: {JSON.stringify(props, null, 2)}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Details;
