import FakePopularRecipesFeedData from '../../../json/popular/popularFeed.json';

const results = [
  {
    id: 715424,
    title: 'The Best Chili',
    image: 'https://spoonacular.com/recipeImages/715424-312x231.jpg',
    imageType: 'jpg',
  },
];

export default function handleFetchPopularFeedResponse(isStartFetch) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      const error = new Error('Failed to fetch information');
      isStartFetch ? resolve(results) : reject(error.message);
    });
  });
}
