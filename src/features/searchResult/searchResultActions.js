import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';

import { api } from '../../api/api';

// test data
import SearchResultExample from '../../json/searchResultExample.json';

/**
 *
 */
const fetchSearchResultData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = SearchResultExample;
    if (data.length === 0) {
      reject('Error, result empty');
    }
    resolve(data);
  }, 500);
});

/**
 *
 */
const handleFetchSearchResultById = createAsyncThunk(
  'searchResult/handleFetchSearchResultById',
  async (id, thunkAPI) => {
    // NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
    // try {
    //   console.log('start', id);
    //   const response = await api.get(
    //     `/recipes/${id}/information?apiKey=${Config.API}&includeNutrition=true`,
    //   );
    //   console.log('RD:', JSON.stringify(response, null, 4));
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

    const response = await fetchSearchResultData.then((data) => data);
    return response;
  },
);

export { handleFetchSearchResultById };
