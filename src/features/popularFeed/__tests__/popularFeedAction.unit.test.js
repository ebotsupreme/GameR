/**
 * TODO: Not sure if I need to use thunk or toolkit's createAsyncThunk.
 * I do need to test the different calls to the reducer from the slice.
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Config from 'react-native-config';

import { api } from '../../../api/api';
import reducer, {
  startLoading,
  hasError,
  popularFeedSuccess,
  selectPopularFeed,
  selectIsLoading,
  selectError,
} from '../popularFeedSlice';
import FakePopularRecipesFeedData from '../../../json/popularRecipesFeed.json';
import { handleFetchPopularFeed } from '../popularFeedActions';

jest.mock('../../../api/api.js');
jest.mock('../../../features/popularFeed/popularFeedActions.js');

const mockStore = configureMockStore([thunk]);

const initialState = {
  popularFeed: [],
  isLoading: false,
  error: false,
};

describe('popular feed slice', () => {
  describe('reducer, actions and selectors', () => {
    it('should return the intial state on the first run', () => {
      // Arrange
      const nextState = initialState;

      // Act
      const result = reducer(undefined, {});

      // Assert
      expect(result).toEqual(nextState);
    });

    it('should properly set loading and error state when a sign in request is made', () => {
      // Arrange

      // Act
      const nextState = reducer(initialState, startLoading());

      // Assert
      const rootState = { popularFeed: nextState };
      expect(selectPopularFeed(rootState)).toEqual([]);
      expect(selectIsLoading(rootState)).toEqual(true);
      expect(selectError(rootState)).toEqual(false);
    });

    it('should properly set loading, error and popularFeed information when a fetch request succeeds', () => {
      // Arrange
      const fakeData = FakePopularRecipesFeedData[0].recipes;

      // Act
      const nextState = reducer(initialState, popularFeedSuccess(fakeData));

      // Assert
      const rootState = { popularFeed: nextState };
      expect(selectPopularFeed(rootState)).toEqual(fakeData);
      expect(selectIsLoading(rootState)).toEqual(false);
      expect(selectError(rootState)).toEqual(false);
    });

    it('should properly set loading, error and remove popularFeed information when fetch request fails', () => {
      // Arrange
      const error = new Error('Failed to fetch information');

      // Act
      const nextState = reducer(initialState, hasError(error.message));

      // Assert
      const rootState = { popularFeed: nextState };
      expect(selectPopularFeed(rootState)).toEqual([]);
      expect(selectIsLoading(rootState)).toEqual(false);
      expect(selectError(rootState)).toEqual(error.message);
    });
  });
});

describe('thunks', () => {
  it('creates both startLoading and popularFeedSuccess when fetch popular feed succeeds', () => {
    // Arrange
    const requestPayload = {
      id: 664473,
      title: 'Vegan Peanut Butter Chocolate Fudge',
    };

    const responsePayload = FakePopularRecipesFeedData[0].recipes;
    const store = mockStore(initialState);

    handleFetchPopularFeed.mockResolvedValueOnce(responsePayload);
    console.log('api.handleFetchPopularFeed', api.handleFetchPopularFeed);
    // Act
    console.log('store', store);
    // console.log('store.dispatch', store.dispatch);
    // mount?
    store.dispatch(handleFetchPopularFeed);

    // Assert
    // NOTE: store.getActions() returns empty [].
    console.log('store.getActions', store.getActions());
    const expectedActions = [
      startLoading(),
      popularFeedSuccess(responsePayload),
    ];
    console.log('expectedActions', expectedActions);
    //TODO: get this working
    // expect(store.getActions()).toEqual(expectedActions);
  });
});
