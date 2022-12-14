/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Products } from 'Components/Products';
import { Checkout } from 'Components/Checkout';

import { products } from 'reducers/products';
import { cart } from 'reducers/cart';
import { popular } from 'reducers/popular';

const reducer = combineReducers({
  products: products.reducer,
  cart: cart.reducer,
  popular: popular.reducer,
});

const persistedStateJSON = sessionStorage.getItem('state');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = configureStore({ reducer, preloadedState: persistedState });

store.subscribe(() => {
  sessionStorage.setItem('state', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Products />}></Route>
            <Route exact path='/checkout' element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};
