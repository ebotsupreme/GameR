import Config from 'react-native-config';

import { api } from '../index';

/**
 * @param {string} id
 */
const handleFetchRelatedFeedResponse = async (id) => {
  try {
    const response = await api.get(
      `/recipes/${id}/similar?apiKey=${Config.API}&number=6&limitLicense=false`,
    );
    return await response.data;
  } catch (e) {
    console.log('e', e);
    //NOTE: API limit error
    if (e.message === 'Request failed with status code 402') {
      return 'Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API.';
    }
    return e.message;
  }
};

export { handleFetchRelatedFeedResponse };
