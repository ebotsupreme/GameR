/**
 *
 * @param {string} type
 * @param {{}} navigation
 * @param {{}} item
 * @param {string} screen
 */
const handleNavigateToScreen = (
  type = '',
  navigation = {},
  item = {},
  screen = '',
) => {
  if (type === 'multi') {
    return navigation.navigate('Search Results', {
      title: item.title,
      screen,
    });
  }
  if (type === 'search') {
    return navigation.navigate(screen, { title: '', screen });
  }
  return navigation.navigate('Details', { id: item.id, screen });
};

export default handleNavigateToScreen;
