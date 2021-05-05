import { api } from '../../api';
import mockAxios from '../../__mocks__/api.test';
import FakePopularRecipesFeedData from '../../../json/popular/popularFeed.json';
// import { handleFetchPopularFeedResponse } from '../popularFeed';
import * as popularFeed from '../popularFeed';
import { handleFetchPopularFeed } from '../../../features/popularFeed/popularFeedActions';
import handleFetchPopularFeedResponse from '../__mocks__/popularFeed';
// jest.mock('../../api.js');
// jest.mock('../../popularFeed/popularFeed.js');
// jest.mock('../../../features/popularFeed/popularFeedActions.js');

jest.mock('../__mocks__/popularFeed.js');

describe('handleFetchPopularFeedResponse', () => {
  it('should successfully fetch data from the api', async () => {
    const data = FakePopularRecipesFeedData.results;

    handleFetchPopularFeedResponse.mockImplementationOnce(() =>
      Promise.resolve(data),
    );

    expect.assertions(1);
    return handleFetchPopularFeedResponse().then((response) =>
      expect(response).toEqual(data),
    );
  });

  it('should throw an error when fetching data fails from the api', async () => {
    const error = new Error('Failed to fetch information');

    mockAxios.get.mockImplementationOnce(() => {
      Promise.reject(error.message);
    });
  });
});
