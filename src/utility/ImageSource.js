/**
 *
 * @param {{}} item
 */
const handleFeedImgSrc = (item) => {
  switch (item.title) {
    case 'Breakfast':
      return require('../assets/breakfast.jpg');
    case 'Appetizer':
      return require('../assets/appetizer.jpg');
    case 'Soup':
      return require('../assets/soup.jpg');
    case 'Salad':
      return require('../assets/salad.jpg');
    case 'Bread':
      return require('../assets/bread.jpg');
    case 'Side Dish':
      return require('../assets/side_dish.jpg');
    case 'Main Course':
      return require('../assets/main_course.jpg');
    case 'Dessert':
      return require('../assets/dessert.jpg');
    case 'Sauce':
      return require('../assets/sauce.jpg');
    case 'Drink':
      return require('../assets/drinks.jpg');
    case 'American':
      return require('../assets/burger.jpg');
    case 'Chinese':
      return require('../assets/orangeChicken.jpg');
    case 'Indian':
      return require('../assets/curry.jpg');
    case 'Italian':
      return require('../assets/pasta.jpg');
    case 'Korean':
      return require('../assets/soonTofu.jpg');
    case 'Mediterranean':
      return require('../assets/falafel.jpg');
    case 'Mexican':
      return require('../assets/tacos.jpg');
    case 'Middle Eastern':
      return require('../assets/kebab.jpg');
    case 'Southern':
      return require('../assets/friedChicken.jpg');
    case 'Thai':
      return require('../assets/padThai.jpg');
  }
};

export { handleFeedImgSrc };
