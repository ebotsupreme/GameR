import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SkeletonCard } from '../../../common/components/index';
import { handleSearchResultFeedPlaceholder } from '../../../utility/index';
import { handleFilterNutritionCriteria } from '../../../functions/Details/index';

/**
 *
 * @param {{}} details
 * @param {string} ingredients
 * @param {string} nutrients
 * @param {number} width
 * @param {number} height
 */
const ListDetails = ({
  details = [],
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
  const [isNutrition, setIsNutrition] = useState(false);
  // console.log('details', details);

  /**
   *
   */
  const onViewNutritionInfo = () => {
    setIsNutrition(!isNutrition);
  };
  /**
   *
   * @param {{}} payloadData
   * @param {requestCallback} filter
   */
  const onListInfo = (payloadData, filter) => {
    let dataToMap = payloadData || filter;

    return dataToMap.map((payloadDetail, index) => {
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
    });
  };
  /**
   *
   * @param {string} showOrHide
   */
  const onShowHideInfo = (showOrHide) => (
    <View style={[styles.alginDataInARow]}>
      <Text style={[styles.showHideInfo, { color: colors.primary }]}>
        {`${showOrHide} Info`}
      </Text>
      <Icon
        name={showOrHide === 'Hide' ? 'minus' : 'plus'}
        size={16}
        color={colors.primary}
        style={styles.nutritionInfoIcon}
      />
    </View>
  );
  /**
   *
   */
  const onSkeletonListInfo = () => {
    return handleSearchResultFeedPlaceholder(6).map((index) => (
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
        <DataTable.Cell style={{ justifyContent: 'flex-end', paddingTop: 5 }}>
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
    ));
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
            <View style={styles.sectionTitle}>
              <Text style={[styles.subTitle, { color: colors.accent }]}>
                ingredients
              </Text>
              <Text style={[styles.serving, fonts.light]}>
                for{' '}
                {details.servings > 1
                  ? details.servings + ' servings'
                  : details.servings + ' serving'}
              </Text>
            </View>
          </DataTable.Row>
          {ingredients && onListInfo(ingredientPayload)}
          {nutrients && (
            <DataTable.Row style={styles.alginDataInARow}>
              <DataTable.Cell>
                <View style={styles.nutritionInfoTitle}>
                  <Text style={[styles.subTitle, { color: colors.accent }]}>
                    Nutrition Info
                  </Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
                <Pressable onPress={onViewNutritionInfo}>
                  {isNutrition
                    ? onShowHideInfo('Hide')
                    : onShowHideInfo('Show')}
                </Pressable>
              </DataTable.Cell>
            </DataTable.Row>
          )}
          {isNutrition &&
            onListInfo(handleFilterNutritionCriteria(nutrientPayload))}
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
          {onSkeletonListInfo()}
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
