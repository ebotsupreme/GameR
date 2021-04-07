import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';

import { api } from '../../api/index';
import { handleFetchFeedType, handleReturnFeedData } from '../../utility/index';

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

    const feedData = await handleFetchFeedType(title);
    // const feedData = await onFetchCuisineTypeData(title);
    const response = await handleReturnFeedData(feedData)
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
