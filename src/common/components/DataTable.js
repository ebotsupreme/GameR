import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const ListDetails = () => (
  <DataTable>
    <DataTable.Row>
      <DataTable.Cell>
        <Text style={styles.name}>bananna</Text>
      </DataTable.Cell>
      <DataTable.Cell style={styles.amountContainer}>
        <Text style={styles.amount}>2</Text>
        <Text style={styles.unit}> cups</Text>
      </DataTable.Cell>
    </DataTable.Row>
  </DataTable>
);

const styles = StyleSheet.create({
  name: {
    fontFamily: 'AirbnbCerealApp-Black',
    fontSize: 18,
  },
  amountContainer: {
    fontFamily: 'AirbnbCerealApp-Black',
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 12,
  },
  amount: {
    fontSize: 19,
    fontWeight: '700',
  },
  unit: {
    fontSize: 18,
  },
});

export default ListDetails;
