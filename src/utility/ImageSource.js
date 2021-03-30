/**
 *
 * @param {{}} item
 */
const handleMealFeedImgSrc = (item) => {
  switch (item.title) {
    case 'Breakfast':
      return require('../assets/breakfast.jpeg');
    case 'Appetizer':
      return require('../assets/appetizer.jpeg');
    case 'Soup':
      return require('../assets/soup.jpeg');
    case 'Salad':
      return require('../assets/salad.jpeg');
    case 'Bread':
      return require('../assets/bread.jpeg');
    case 'Side Dish':
      return require('../assets/side_dish.jpeg');
    case 'Main Course':
      return require('../assets/main_course.jpeg');
    case 'Dessert':
      return require('../assets/dessert.jpeg');
    case 'Sauce':
      return require('../assets/sauce.jpeg');
    case 'Drink':
      return require('../assets/drinks.jpeg');
  }
};

export { handleMealFeedImgSrc };
