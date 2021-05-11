import {
  breakfast,
  appetizer,
  soup,
  salad,
  bread,
  sideDish,
  mainCourse,
  dessert,
  sauce,
  drink,
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
import { searchResult } from '../json/searchResult/index';
import { relatedFeed } from '../json/related/index';
/**
 *
 * @param {string} feedType
 */
const handleFetchFeedType = async (feedType = '', feedId = '') => {
  switch (feedType || feedId) {
    case 'Breakfast':
      return breakfast;
    case 'Appetizer':
      return appetizer;
    case 'Soup':
      return soup;
    case 'Salad':
      return salad;
    case 'Bread':
      return bread;
    case 'Side Dish':
      return sideDish;
    case 'Main Course':
      return mainCourse;
    case 'Dessert':
      return dessert;
    case 'Sauce':
      return sauce;
    case 'Drink':
      return drink;
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
    case 'Related':
      return relatedFeed;
    case feedId:
      return searchResult;
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
