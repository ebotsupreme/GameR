import Config from 'react-native-config';

import {
  startLoading,
  hasError,
  randomFeedSuccess,
} from '../../features/randomFeed/index';

import { api } from '../index';

/**
 *
 */
const handleFetchRandomFeedResponse = async () => {
  try {
    const response = await api.get(
      `/recipes/complexSearch?apiKey=${Config.API}&sort=random&number=25`,
    );
    return await response.data.results;
  } catch (e) {
    console.log('e: ', e);
    hasError(e.message);
  }
};

export { handleFetchRandomFeedResponse };
