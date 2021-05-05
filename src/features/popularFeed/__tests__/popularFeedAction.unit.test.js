import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Config from 'react-native-config';

import mockAxios from '../../../api/__mocks__/api.test';
import { api } from '../../../api/api';
import reducer, {
  startLoading,
  hasError,
  popularFeedSuccess,
  selectPopularFeed,
  selectIsLoadingPopularFeed,
  selectIsPopularFeedLoaded,
  selectError,
} from '../popularFeedSlice';
import FakePopularRecipesFeedData from '../../../json/popular/popularFeed.json';
import { handleFetchPopularFeed } from '../popularFeedActions';

jest.mock('../../../api/api.js');
jest.mock('../../../features/popularFeed/popularFeedActions.js');
jest.mock('../../../utility/FetchFeedTypeData.js');

const mockStore = configureMockStore([thunk]);

const initialState = {
  isLoadingPopularFeed: false,
  isPopularFeedLoaded: false,
  error: false,
  popularFeed: [],
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

    it('should properly set loading and error state when a get request is made', () => {
      // Arrange

      // Act
      const nextState = reducer(initialState, startLoading());

      // Assert
      const rootState = { popularFeed: nextState };
      expect(selectPopularFeed(rootState)).toEqual([]);
      expect(selectIsLoadingPopularFeed(rootState)).toEqual(true);
      expect(selectIsPopularFeedLoaded(rootState)).toEqual(false);
      expect(selectError(rootState)).toEqual(false);
    });

    it('should properly set loading, error and popularFeed information when a fetch request succeeds', () => {
      // Arrange
      const fakeData = FakePopularRecipesFeedData.results;

      // Act
      const nextState = reducer(initialState, popularFeedSuccess(fakeData));

      // Assert
      const rootState = { popularFeed: nextState };
      expect(selectPopularFeed(rootState)).not.toEqual([]);
      expect(selectPopularFeed(rootState)).toEqual(fakeData);
      expect(selectIsLoadingPopularFeed(rootState)).toEqual(false);
      expect(selectIsPopularFeedLoaded(rootState)).toEqual(true);
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
      expect(selectIsLoadingPopularFeed(rootState)).toEqual(false);
      expect(selectIsPopularFeedLoaded(rootState)).toEqual(false);
      expect(selectError(rootState)).toEqual(error.message);
    });
  });
});

describe('thunks', () => {
  it('creates both startLoading and popularFeedSuccess actions when fetch popular feed succeeds', async () => {
    // Arrange
    const responsePayload = FakePopularRecipesFeedData.results;
    const store = mockStore(initialState);
    handleFetchPopularFeed.mockResolvedValueOnce(responsePayload);

    // Act
    store.dispatch(startLoading());
    store.dispatch(popularFeedSuccess(responsePayload));

    // Assert
    const expectedActions = [
      startLoading(),
      popularFeedSuccess(responsePayload),
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates both startLoading and hasError when fetch popular feed fails', async () => {
    // Arrange
    const responseError = new Error('Failed to fetch information');
    const store = mockStore(initialState);
    handleFetchPopularFeed.mockRejectedValueOnce(responseError.message);

    // Act
    store.dispatch(startLoading());
    store.dispatch(hasError(responseError.message));

    // Assert
    const expectedActions = [startLoading(), hasError(responseError.message)];
    expect(store.getActions()).toEqual(expectedActions);
  });

  // TODO: make one for api call
});
