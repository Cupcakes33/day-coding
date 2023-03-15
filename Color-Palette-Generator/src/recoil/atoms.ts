import { atom } from 'recoil';
import { generateRandomColors } from '../utils/utils';

export const colorsState = atom({
  key: 'colorsState',
  default: generateRandomColors(10),
});
