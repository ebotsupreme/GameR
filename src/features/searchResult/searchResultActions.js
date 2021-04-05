import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';

import { api } from '../../api/api';

const handleFetchSearchResultById = createAsyncThunk(
  'searchResult/handleFetchSearchResultById',
  async (id, thunkAPI) => {
    try {
      console.log('start', id);
      const response = await api.get(
        `/recipes/${id}/information?apiKey=${Config.API}&includeNutrition=true`,
      );
      console.log('RD:', response);
      return response.data;
    } catch (e) {
      console.log('error', e);
      /**
       * API limit error
       */
      if (e.message === 'Request failed with status code 402') {
        return 'Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API.';
      }
      return e.message;
    }
  },
);

export { handleFetchSearchResultById };
