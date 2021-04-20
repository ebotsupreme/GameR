import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';

/**
 *
 * @param {{}} details
 * @param {screen} detailType
 */
const ListDetails = ({ details = {}, detailType = '' }) => {
  const { fonts } = useTheme();
  let payload = [];
  // console.log('details', details);
  // console.log('details nutrition ingredients', details.nutrition.ingredients);
  /**
   *
   */
  const onDeterminePayloadType = () => {
    if (detailType === 'Ingredients') {
      payload = details.nutrition.ingredients;
    }
    if (detailType === 'Nutrients') {
      const filteredNutritonInfo = onFilterNutritionCriteria(
        details.nutrition.nutrients,
      );
      payload = filteredNutritonInfo;
    }
    return payload;
  };
  /**
   *
   * @param {{}} nutrients
   */
  const onFilterNutritionCriteria = (nutrients) => {
    return onFIlterNutrition(nutrients);
  };
  /**
   *
   * @param {{}} payloadToFilter
   */
  const onFIlterNutrition = (payloadToFilter) => {
    const filtered = payloadToFilter.filter((nutrient) => {
      return filterByNutrientName(nutrient.name);
    });
    return filtered;
  };
  /**
   *
   * @param {string} nutrientName
   */
  const filterByNutrientName = (nutrientName) => {
    switch (nutrientName) {
      case 'Calories':
        return nutrientName;
      case 'Fat':
        return nutrientName;
      case 'Saturated Fat':
        return nutrientName;
      case 'Carbohydrates':
        return nutrientName;
      case 'Sugar':
        return nutrientName;
      case 'Cholestrol':
        return nutrientName;
      case 'Sodium':
        return nutrientName;
      case 'Protein':
        return nutrientName;
      case 'Fiber':
        return nutrientName;
    }
  };

  /**
   * NOTE: This component is for ingredients, nutrition, and instructions
   * Nutrition: Calories, Fat, Saturated Fat, Carbohydrates, Sugar,
   *   Cholestrol, Sodium, Protein, Fiber.
   */
  return (
    <DataTable>
      {details.nutrition ? (
        <>
          <DataTable.Row>
            {detailType === 'Ingredients' && (
              <View style={styles.sectionTitle}>
                <Text style={styles.subTitle}>{detailType}</Text>
                <Text style={[styles.serving, fonts.light]}>
                  for{' '}
                  {details.servings > 1
                    ? details.servings + ' servings'
                    : details.servings + ' serving'}
                </Text>
              </View>
            )}
            {detailType === 'Nutrients' && (
              <View style={styles.sectionTitle}>
                <Text style={styles.subTitle}>Nutrition Info</Text>
              </View>
            )}
          </DataTable.Row>
          {onDeterminePayloadType().map((payloadDetail, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>
                <Text style={styles.name}>{payloadDetail.name}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.amountContainer}>
                <Text style={styles.amount}>{payloadDetail.amount}</Text>
                <Text style={styles.unit}> {payloadDetail.unit}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
          {detailType === 'Nutrients' && (
            <DataTable.Row>
              <DataTable.Cell>
                <Text style={styles.basedOnservingSize}>
                  Based on one serving size.
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          )}
        </>
      ) : (
        /**
         * TODO: ADD Skelton Card
         */
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
  basedOnservingSize: {
    fontFamily: 'AirbnbCerealApp-Black',
    fontSize: 16,
    color: 'grey',
  },
  sectionTitle: {
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 12,
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
