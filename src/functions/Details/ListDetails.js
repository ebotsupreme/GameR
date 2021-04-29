/**
 *
 * @param {{}} allNutrients
 */
const handleFilterNutritionCriteria = (allNutrients) => {
  return onFilterNutrition(allNutrients);
};
/**
 *
 * @param {{}} payloadToFilter
 */
const onFilterNutrition = (payloadToFilter) => {
  return payloadToFilter.filter((nutrient) => {
    return onFilterByNutrientName(nutrient.name);
  });
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

export { handleFilterNutritionCriteria };
