import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';

import { SkeletonCard } from '../../../common/components/index';
import { handleSearchResultFeedPlaceholder } from '../../../utility/index';

/**
 *
 * @param {{}} details
 * @param {number} width
 * @param {number} height
 */
const Preparation = ({ details = [], width, height }) => {
  const { colors, fonts } = useTheme();
  const instructionSteps = details.analyzedInstructions
    ? details.analyzedInstructions[0]
    : [];
  const listSteps = instructionSteps.steps ? instructionSteps.steps : [];
  /**
   *
   * @param {{}} steps
   */
  const onListInfo = (steps) => {
    return steps.map((step, index) => {
      return (
        <DataTable.Row key={index} style={styles.preparationRow}>
          {Platform.OS === 'ios' && (
            <>
              <DataTable.Cell style={styles.preperationStepNumberCell}>
                <Text style={styles.preparationStepNumberText}>
                  {step.number}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.preperationStepsCell}>
                <View style={styles.preperationStepsView}>
                  <Text style={styles.preparationSteps}>{step.step}</Text>
                </View>
              </DataTable.Cell>
            </>
          )}
          {Platform.OS === 'android' && (
            <View style={[styles.subTitle, styles.preparationStepsAndroidView]}>
              <Text
                style={[styles.preparationStepNumberText, { fontSize: 18 }]}>
                {step.number}
              </Text>
              <Text
                style={[
                  styles.preparationSteps,
                  styles.prparationStepsAndroid,
                ]}>
                {step.step}
              </Text>
            </View>
          )}
        </DataTable.Row>
      );
    });
  };

  return (
    <View>
      {details.analyzedInstructions ? (
        <>
          <View style={[styles.subTitle, styles.preparationBackground]}>
            <Text
              style={[fonts.light, styles.readyIn, styles.paddingHorizontal]}>
              Ready In:{' '}
              <Text style={styles.scoreAndLikes}>
                {details.readyInMinutes} min
              </Text>
            </Text>
            <Text
              style={[fonts.light, styles.readyIn, styles.paddingHorizontal]}>
              Servings:{' '}
              <Text style={styles.scoreAndLikes}>{details.servings}</Text>
            </Text>
          </View>
          <View style={[styles.preparationBackground, styles.containerPadding]}>
            {onListInfo(listSteps)}
          </View>
        </>
      ) : (
        <>
          <View style={styles.subTitle}>
            <SkeletonCard
              width={width / 3 + 6}
              height={height / 12}
              screen="Details"
              horizontalMargin={15}
              marginTop={15}
              marginBottom={15}
            />
            <SkeletonCard
              width={width / 5 + 8}
              height={height / 12}
              screen="Details"
              horizontalMargin={15}
              marginTop={15}
              marginBottom={15}
            />
          </View>
          {/* NOTE: techinical debt: refactor - use onSkeletonListInfo() */}
          <DataTable.Row style={styles.preparationRow}>
            <DataTable.Cell style={styles.preperationStepNumberCell}>
              <SkeletonCard
                width={width / 14}
                height={height / 12}
                screen="Details"
                horizontalMargin={20}
                marginTop={15}
                marginBottom={15}
              />
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 8 }}>
              <SkeletonCard
                width={width / 2 + 50}
                height={height / 6}
                screen="Details"
                horizontalMargin={20}
                marginTop={20}
                marginBottom={15}
              />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.preparationRow}>
            <DataTable.Cell style={styles.preperationStepNumberCell}>
              <SkeletonCard
                width={width / 14}
                height={height / 12}
                screen="Details"
                horizontalMargin={20}
                marginTop={15}
                marginBottom={15}
              />
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 8 }}>
              <SkeletonCard
                width={width / 2 + 50}
                height={height / 6}
                screen="Details"
                horizontalMargin={20}
                marginTop={20}
                marginBottom={15}
              />
            </DataTable.Cell>
          </DataTable.Row>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  preparationBackground: {
    backgroundColor: '#f1f1f1',
  },
  containerPadding: {
    padding: 15,
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  readyIn: {
    fontSize: 20,
  },
  paddingHorizontal: {
    paddingHorizontal: 15,
  },
  scoreAndLikes: {
    fontFamily: 'AirbnbCerealApp-Black',
    fontSize: 19,
    fontWeight: '600',
  },
  preparationRow: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  preperationStepNumberCell: {
    alignItems: 'flex-start',
    paddingTop: 5,
  },
  preparationStepNumberText: {
    fontFamily: 'AirbnbCerealApp-Black',
    fontSize: 20,
    fontWeight: '700',
  },
  preperationStepsCell: {
    flex: 10,
    paddingVertical: 10,
  },
  preperationStepsView: {
    justifyContent: 'center',
  },
  preparationSteps: {
    fontFamily: 'AirbnbCerealApp-Black',
    fontSize: 18,
    fontWeight: '700',
  },
  preparationStepsAndroidView: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  prparationStepsAndroid: {
    paddingHorizontal: 15,
    fontSize: 17,
  },
});

export default Preparation;
