import Config from 'react-native-config';

import { api } from '../index';

/**
 *
 */
const handleFetchFeaturedFeedResponse = async () => {
  try {
    const response = await api.get(
      `/recipes/random?apiKey=${Config.API}&limitLicense=false&number=1`,
    );
    return await response.data.recipes;
  } catch (e) {
    /**
     * FIXME: look into how this error will be caught.
     */
    console.log('e: ', e);
    return e.message;
  }
};

export { handleFetchFeaturedFeedResponse };
