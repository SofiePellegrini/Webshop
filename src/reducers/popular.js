/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const popularProductsData = [
  {
    id: 1,
    title: 'Black bag',
    price: 149.9,
    imageLink: require('../images/bluebag.jpg'),
  },
  {
    id: 2,
    title: 'Brown bag',
    price: 189.9,
    imageLink: require('../images/brownbag.jpg'),
  },
  {
    id: 2,
    title: 'Pink backpack',
    price: 99.9,
    imageLink: require('../images/backpack.jpg'),
  },
  {
    id: 2,
    title: 'Black handbag',
    price: 319.8,
    imageLink: require('../images/blackbag.jpg'),
  },
  {
    id: 2,
    title: 'Blue backpack',
    price: 99.9,
    imageLink: require('../images/bluebackpack.jpg'),
  },
  {
    id: 2,
    title: 'Handbag',
    price: 149.9,
    imageLink: require('../images/handbag.jpg'),
  },
  {
    id: 2,
    title: 'Pink handbag',
    price: 350.9,
    imageLink: require('../images/pinkbag.jpg'),
  },
];

export const popular = createSlice({
  name: 'popular',
  initialState: popularProductsData,
});
