import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SkeletonCard } from '../components/index';
import { handleSearchResultFeedPlaceholder } from '../../utility/index';

/**
 *
 * @param {{}} details
 * @param {screen} detailType
 */
const ListDetails = ({
  details = [],
  detailType = '',
  width,
  height,
  ingredients,
  nutrients,
}) => {
  const ingredientPayload =
    details.nutrition && ingredients ? details.nutrition.ingredients : [];
  const nutrientPayload =
    details.nutrition && nutrients ? details.nutrition.nutrients : [];
  const { fonts, colors } = useTheme();
  const isIngredient = true;
  const [isNutrition, setIsNutrition] = useState(false);
  let payload = [];
  // console.log('details', details);
  // console.log('details ingredients', details.nutrition.ingredients);
  // console.log('details nutrition', details.nutrition.nutrients);

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
  const onFilterNutritionCriteria = (allNutrients) => {
    return onFilterNutrition(allNutrients);
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
            {ingredients && (
              <View style={styles.sectionTitle}>
                <Text style={styles.subTitle}>{ingredients}</Text>
                <Text style={[styles.serving, fonts.light]}>
                  for{' '}
                  {details.servings > 1
                    ? details.servings + ' servings'
                    : details.servings + ' serving'}
                </Text>
              </View>
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
          {nutrients && (
            <DataTable.Row style={styles.alginDataInARow}>
              <DataTable.Cell>
                <View style={styles.nutritionInfoTitle}>
                  <Text style={styles.subTitle}>Nutrition Info</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
                <Pressable onPress={onViewNutritionInfo}>
                  {isNutrition ? (
                    <View style={[styles.alginDataInARow]}>
                      <Text
                        style={[
                          styles.showHideInfo,
                          { color: colors.primary },
                        ]}>
                        Hide Info
                      </Text>
                      <Icon
                        name="minus"
                        size={16}
                        color={colors.primary}
                        style={styles.nutritionInfoIcon}
                      />
                    </View>
                  ) : (
                    <View style={styles.alginDataInARow}>
                      <Text
                        style={[
                          styles.showHideInfo,
                          { color: colors.primary },
                        ]}>
                        Show Info
                      </Text>
                      <Icon
                        name="plus"
                        size={16}
                        color={colors.primary}
                        style={styles.nutritionInfoIcon}
                      />
                    </View>
                  )}
                </Pressable>
              </DataTable.Cell>
            </DataTable.Row>
          )}
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
        <>
          <DataTable.Row>
            <View style={[styles.sectionTitle]}>
              <SkeletonCard
                width={width / 3 + 5}
                height={height / 14 - 4}
                screen="DataTable"
                horizontalMargin={0}
                marginTop={0}
                marginBottom={0}
                justifyContent={'flex-start'}
              />
              <View style={{ paddingVertical: 3 }} />
              <SkeletonCard
                width={width / 3 - 10}
                height={height / 16 - 4}
                screen="DataTable"
                horizontalMargin={0}
                marginTop={0}
                marginBottom={0}
                justifyContent={'flex-start'}
              />
            </View>
          </DataTable.Row>
          {handleSearchResultFeedPlaceholder(6).map((index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell style={{ paddingTop: 5 }}>
                <SkeletonCard
                  width={width / 4 + 6}
                  height={height / 14 - 4}
                  screen="DataTable"
                  horizontalMargin={0}
                  marginTop={0}
                  marginBottom={0}
                  justifyContent={'flex-start'}
                />
              </DataTable.Cell>
              <DataTable.Cell
                style={{ justifyContent: 'flex-end', paddingTop: 5 }}>
                <SkeletonCard
                  width={width / 4 - 4}
                  height={height / 14 - 4}
                  screen="DataTable"
                  horizontalMargin={0}
                  marginTop={0}
                  marginBottom={0}
                  justifyContent={'flex-end'}
                />
              </DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Row>
            <DataTable.Cell style={{ paddingTop: 5 }}>
              <SkeletonCard
                width={width / 3 + 5}
                height={height / 14 - 4}
                screen="DataTable"
                horizontalMargin={0}
                marginTop={0}
                marginBottom={0}
                justifyContent={'flex-start'}
              />
            </DataTable.Cell>
            <DataTable.Cell
              style={{ justifyContent: 'flex-end', paddingTop: 5 }}>
              <SkeletonCard
                width={width / 4 + 6}
                height={height / 14 - 4}
                screen="DataTable"
                horizontalMargin={0}
                marginTop={0}
                marginBottom={0}
                justifyContent={'flex-end'}
              />
            </DataTable.Cell>
          </DataTable.Row>
        </>
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
    top: 10,
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
  alginDataInARow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutritionInfoTitle: {
    paddingTop: 5,
  },
  nutritionInfoIcon: {
    alignSelf: 'center',
    paddingTop: 3,
    paddingLeft: 5,
  },
});

export default ListDetails;
