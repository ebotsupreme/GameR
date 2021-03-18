import { startLoading, hasError, recentFeedSuccess } from './index';
import { fetchRecentFeed } from '../../api/index';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchRecentFeed = async (dispatch) => {
  dispatch(startLoading());
  try {
    await fetchRecentFeed.get('/users').then((response) => {
      console.log('response', response);
      dispatch(recentFeedSuccess(response.data));
    });
  } catch (e) {
    console.error(e.message);
    dispatch(hasError(e.message));
  }
};
