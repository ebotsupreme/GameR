import axios from 'axios';
import FakePopularRecipesFeedData from '../../json/popularRecipesFeed.json';

jest.mock('axios');

it('should fetch popular feed data', () => {
  const fakeRecipe = [
    { id: 664473, title: 'Vegan Peanut Butter Chocolate Fudge' },
  ];
  const fakeData = FakePopularRecipesFeedData[0].recipes;
  const resp = { data: fakeRecipe };
  axios.get.mockResolvedValue(resp);

  const fakeFetchPopularTestFeed = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fakeData.length === 0) {
        reject('Error, feed empty');
      }
      resolve(fakeData);
    }, 300);
  });

  fakeFetchPopularTestFeed.then((data) => expect(data).toEqual(fakeRecipe));
});
