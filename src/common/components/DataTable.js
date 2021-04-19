import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';

const ListDetails = ({ details = {} }) => {
  const { fonts } = useTheme();
  // console.log('details', details);
  // console.log('details nutrition ingredients', details.nutrition.ingredients);
  // console.log('details.nutrition.ingredients', details.nutrition.ingredients);
  // const ingredients = details ? details.nutrition.ingredients : {};
  // console.log('ingredients: ', ingredients);
  if (details.nutrition) {
    console.log('details', details.nutrition);
  }

  return (
    <DataTable>
      {details.nutrition ? (
        <>
          <DataTable.Row>
            <View style={styles.ingredients}>
              <Text style={styles.subTitle}>Ingredients</Text>
              <Text style={[styles.serving, fonts.light]}>
                for{' '}
                {details.servings > 1
                  ? details.servings + ' servings'
                  : details.servings + ' serving'}
              </Text>
            </View>
          </DataTable.Row>
          {details.nutrition.ingredients.map((ingredient, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>
                <Text style={styles.name}>{ingredient.name}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.amountContainer}>
                <Text style={styles.amount}>{ingredient.amount}</Text>
                <Text style={styles.unit}> {ingredient.unit}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </>
      ) : (
        // TODO: ADD Skelton Card
        <DataTable.Row>
          <DataTable.Cell>
            <Text>Details Unavailable</Text>
          </DataTable.Cell>
        </DataTable.Row>
      )}
    </DataTable>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: 'AirbnbCerealApp-Bold',
    fontSize: 22,
  },
  serving: {
    fontSize: 18,
  },
  ingredients: {
    paddingTop: 8,
    paddingBottom: 20,
  },
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
