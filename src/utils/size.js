import {
  Platform,
  Dimensions,
} from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on invision's dimension width
const baseWidth = SCREEN_WIDTH / 375;

export function scale(size) {
  if (Platform.OS === 'ios') {
    return Math.round(baseWidth * size);
  }
  return Math.round(baseWidth * size) - 1;
}

export const normalize = size => size + (scale(size) - size);
export const getScreenWidth = () => SCREEN_WIDTH;

export const getScreenHeight = () => SCREEN_HEIGHT;

export const getAspectRatio = WIDTH => Math.floor((4 / 3) * WIDTH);

export const isPortrait = (WIDTH, HEIGHT) => HEIGHT >= WIDTH;
