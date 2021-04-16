import { Dimensions } from 'react-native';

/**
 *
 */
const handleWindowWidth = () => {
  return Dimensions.get('window').width;
};

const WIDTH = handleWindowWidth() / 4;
const HEIGHT = WIDTH / 4;

export { handleWindowWidth, WIDTH, HEIGHT };
