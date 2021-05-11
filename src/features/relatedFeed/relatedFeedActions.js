import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleFetchRelatedFeedResponse } from '../../api/relatedFeed/index';
import { handleFetchFeedType, handleReturnFeedData } from '../../utility/index';

/**
 *
 */
const handleFetchRelatedFeedById = createAsyncThunk(
  'relatedFeed/handleFetchRelatedFeedById',
  async (id, thunkAPI) => {
    /**
     * NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
     */
    // try {
    //   const response = await handleFetchRelatedFeedResponse(id);
    //   return response;
    // } catch (e) {
    //   console.log('error: ', e);
    //   return e.message;
    // }

    const feedData = await handleFetchFeedType('Related', '');
    const response = await handleReturnFeedData(feedData)
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log('error', e);
      });
    return response;
  },
);

export { handleFetchRelatedFeedById };
