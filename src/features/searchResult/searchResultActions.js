import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleFetchSearchResultResponse } from '../../api/searchResult/index';
import { handleFetchFeedType, handleReturnFeedData } from '../../utility/index';

/**
 *
 */
const handleFetchSearchResultById = createAsyncThunk(
  'searchResult/handleFetchSearchResultById',
  async (id, thunkAPI) => {
    /**
     * NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
     */
    // try {
    //   console.log('start', id);
    //   const response = await handleFetchSearchResultResponse(id);
    //   // console.log('Search Result Action:', JSON.stringify(response, null, 4));
    //   return response;
    // } catch (e) {
    //   console.log('error', e);
    //   return e.message;
    // }

    const feedData = await handleFetchFeedType('', id);
    const response = await handleReturnFeedData(feedData)
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log('error: ', e);
      });
    return response;
  },
);

export { handleFetchSearchResultById };
