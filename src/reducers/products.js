/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const productData = [
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
];

export const products = createSlice({
  name: 'products',
  initialState: productData,
});
