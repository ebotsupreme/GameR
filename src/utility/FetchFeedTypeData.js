import {
  breakfastFeedData,
  appetizerFeedData,
  soupFeedData,
  saladFeedData,
  breadFeedData,
  sideDishFeedData,
  mainCourseFeedData,
  dessertFeedData,
  sauceFeedData,
  drinkFeedData,
} from '../json/meal/index';
import {
  american,
  chinese,
  indian,
  italian,
  korean,
  mediterranean,
  mexican,
  middleEastern,
  southern,
  thai,
} from '../json/cuisine/index';
/**
 *
 * @param {string} feedType
 */
const handleFetchFeedType = async (feedType) => {
  switch (feedType) {
    case 'Breakfast':
      return breakfastFeedData;
    case 'Appetizer':
      return appetizerFeedData;
    case 'Soup':
      return soupFeedData;
    case 'Salad':
      return saladFeedData;
    case 'Bread':
      return breadFeedData;
    case 'Side Dish':
      return sideDishFeedData;
    case 'Main Course':
      return mainCourseFeedData;
    case 'Dessert':
      return dessertFeedData;
    case 'Sauce':
      return sauceFeedData;
    case 'Drink':
      return drinkFeedData;
    case 'American':
      return american;
    case 'Chinese':
      return chinese;
    case 'Indian':
      return indian;
    case 'Italian':
      return italian;
    case 'Korean':
      return korean;
    case 'Mediterranean':
      return mediterranean;
    case 'Mexican':
      return mexican;
    case 'MiddleEastern':
      return middleEastern;
    case 'Southern':
      return southern;
    case 'Thai':
      return thai;
  }
};
/**
 *
 * @param {{}} feedData
 */
const handleReturnFeedData = (feedData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = feedData;
      if (data === undefined || (data && data.length === 0)) {
        reject('Error, feed empty');
      }
      resolve(data);
    }, 500);
  });
};

export { handleFetchFeedType, handleReturnFeedData };
