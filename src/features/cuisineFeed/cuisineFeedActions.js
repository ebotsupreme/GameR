import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';

import { api } from '../../api/index';

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
} from '../../json/cuisine/index';

/**
 *
 * @param {string} cuisineType
 */
const onFetchCuisineTypeData = async (cuisineType) => {
  switch (cuisineType) {
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
const returnFeedData = (feedData) => {
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
/**
 *
 */
const handleFetchCuisineFeedByTitle = createAsyncThunk(
  'cuisineFeed/handleFetchCuisineFeedByTitle',
  async (title) => {
    // NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
    // try {
    //   console.log('handleFetchCuisineFeedByTitle', title);
    //   const response = await api.get(
    //     `/recipes/complexSearch?apiKey=${Config.API}&cuisine=${title}&number=25`,
    //   );
    //   console.log('response.data', response.data);
    //   return response.data;
    // } catch (e) {
    //   console.log('error', e);
    //   /**
    //    * API limit error
    //    */
    //   if (e.message === 'Request failed with status code 402') {
    //     return 'Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API.';
    //   }
    //   return e.message;
    // }

    const feedData = await onFetchCuisineTypeData(title);
    const response = await returnFeedData(feedData)
      .then((data) => {
        console.log('handleFetchCuisineFeedByTtitle Data', data);
        return data;
      })
      .catch((e) => {
        console.log('error', e);
      });
    return response;
  },
);

export { handleFetchCuisineFeedByTitle };
