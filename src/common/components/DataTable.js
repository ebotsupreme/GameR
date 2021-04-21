import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';

/**
 *
 * @param {{}} details
 * @param {screen} detailType
 */
const ListDetails = ({ details = [], detailType = '' }) => {
  const ingredientPayload =
    details.nutrition && detailType === 'Ingredients'
      ? details.nutrition.ingredients
      : [];
  const nutrientPayload =
    details.nutrition && detailType === 'Nutrients'
      ? details.nutrition.nutrients
      : [];
  const { fonts, colors } = useTheme();
  const isIngredient = true;
  const [isNutrition, setIsNutrition] = useState(false);
  let payload = [];
  // console.log('details', details);
  // console.log('details nutrition ingredients', details.nutrition.ingredients);

  /**
   * NOTE: Keeping this for now. Will remove in future.
   */
  const onDeterminePayloadType = () => {
    if (detailType === 'Ingredients') {
      payload = details.nutrition.ingredients;
      return payload;
    }
    if (detailType === 'Nutrients') {
      const filteredNutritonInfo = onFilterNutritionCriteria(
        details.nutrition.nutrients,
      );
      payload = filteredNutritonInfo;
      return payload;
    }
  };
  /**
   *
   * @param {{}} nutrients
   */
  const onFilterNutritionCriteria = (nutrients) => {
    return onFilterNutrition(nutrients);
  };
  /**
   *
   * @param {{}} payloadToFilter
   */
  const onFilterNutrition = (payloadToFilter) => {
    /**
     *
     */
    const filtered = payloadToFilter.filter((nutrient) => {
      return onFilterByNutrientName(nutrient.name);
    });
    return filtered;
  };
  /**
   *
   * @param {string} nutrientName
   */
  const onFilterByNutrientName = (nutrientName) => {
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
   *
   */
  const onViewNutritionInfo = () => {
    setIsNutrition(!isNutrition);
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
              <>
                <DataTable.Cell>
                  <View style={{ justifyContent: 'center', paddingTop: 5 }}>
                    <Text style={styles.subTitle}>Nutrition Info</Text>
                  </View>
                </DataTable.Cell>
                <DataTable.Cell />
                <DataTable.Cell style={styles.positionCellRight}>
                  <Pressable onPress={onViewNutritionInfo}>
                    {/* {({ pressed }) => (
                    <Text>{pressed ? 'pressed' : 'press me'}</Text>
                  )} */}
                    {isNutrition ? (
                      <Text
                        style={[
                          styles.showHideInfo,
                          { color: colors.primary, paddingTop: 3 },
                        ]}>
                        Hide Info
                      </Text>
                    ) : (
                      <Text
                        style={[
                          styles.showHideInfo,
                          { color: colors.primary, paddingTop: 3 },
                        ]}>
                        Show Info
                      </Text>
                    )}
                  </Pressable>
                </DataTable.Cell>
              </>
            )}
          </DataTable.Row>
          {
            // NOTE: if inside a separate handler, this does not render
            isIngredient &&
              ingredientPayload.map((payloadDetail, index) => {
                return (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>
                      <Text style={styles.name}>{payloadDetail.name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.positionCellRight}>
                      <Text style={styles.amount}>{payloadDetail.amount}</Text>
                      <Text style={styles.unit}> {payloadDetail.unit}</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })
          }
          {
            // NOTE: if inside a separate handler, this does not render
            isNutrition &&
              onFilterNutritionCriteria(nutrientPayload).map((info, index) => {
                return (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>
                      <Text style={styles.name}>{info.name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.positionCellRight}>
                      <Text style={styles.amount}>{info.amount}</Text>
                      <Text style={styles.unit}> {info.unit}</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })
          }
          {isNutrition && (
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
  positionCellRight: {
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
  showHideInfo: {
    fontFamily: 'AirbnbCerealApp-Bold',
    fontSize: 18,
  },
});

export default ListDetails;
