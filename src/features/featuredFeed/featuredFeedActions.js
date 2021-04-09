import { startLoading, hasError, featuredFeedSuccess } from './index';
import { handleFetchFeaturedFeedResponse } from '../../api/featuredFeed/index';
import { handleReturnFeedData } from '../../utility/index';
import featuredFeedData from '../../json/featured/featuredRecipeFeed.json';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchFeaturedFeed = async (dispatch) => {
  /**
   *  NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
   */
  dispatch(startLoading());
  try {
    const payload = await handleFetchFeaturedFeedResponse();
    console.log('payload: ', payload);
    dispatch(featuredFeedSuccess(payload));
  } catch (e) {
    console.log('error: ', e);
    dispatch(hasError(e.message));
  }

  // dispatch(startLoading());
  // try {
  //   const response = await handleReturnFeedData(featuredFeedData);
  //   console.log('response.recipes', response.recipes);
  //   dispatch(featuredFeedSuccess(response.recipes));
  // } catch (e) {
  //   /**
  //    * FIXME: If there is an error from within handleReturnFeedData,
  //    * will it pass as a response or will it catch below?
  //    */
  //   console.log('error: ', e);
  //   dispatch(hasError(e.message));
  // }
};
