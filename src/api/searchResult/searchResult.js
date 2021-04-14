import Config from 'react-native-config';

import { api } from '../index';

const handleFetchSearchResultResponse = async (id) => {
  try {
    console.log('start', id);
    const response = await api.get(
      `/recipes/${id}/information?apiKey=${Config.API}&includeNutrition=true`,
    );
    return await response.data;
  } catch (e) {
    console.log('error', e);
    //NOTE: API limit error
    if (e.message === 'Request failed with status code 402') {
      return 'Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API.';
    }
    return e.message;
  }
};

export { handleFetchSearchResultResponse };
