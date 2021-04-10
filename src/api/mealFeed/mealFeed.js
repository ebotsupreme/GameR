import Config from 'react-native-config';

import { api } from '../index';

const handleFetchMealFeedResponse = async (title) => {
  try {
    const response = await api.get(
      `/recipes/complexSearch?apiKey=${Config.API}&type=${title}&number=50`,
    );
    return await response.data;
  } catch (e) {
    /**
     * FIXME: look into how this error will be caught.
     */
    console.log('e: ', e);
    return e.message;
  }
};

export { handleFetchMealFeedResponse };
