import { recentFeedSuccess } from './index';
import { fetchRecentFeed } from '../../api/index';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchRecentFeed = async (dispatch) => {
  try {
    await fetchRecentFeed.get('/users').then((response) => {
      dispatch(recentFeedSuccess(response.data));
    });
  } catch (e) {
    return console.error(e.message);
  }
};
