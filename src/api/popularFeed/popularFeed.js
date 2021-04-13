import Config from 'react-native-config';

import { api } from '../index';

/**
 *
 */
const handleFetchPopularFeedResponse = async () => {
  try {
    const response = await api.get(
      `/recipes/complexSearch?apiKey=${Config.API}&sort=popularity&number=10`,
    );
    return await response.data.results;
  } catch (e) {
    /**
     * FIXME: look into how this error will be caught.
     */
    console.log('e: ', e);
    return e.message;
  }
};

export { handleFetchPopularFeedResponse };
