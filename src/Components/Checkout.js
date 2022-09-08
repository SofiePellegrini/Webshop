/* eslint-disable */
import React from 'react';
import { Navbar } from './Navbar';
import { useSelector } from 'react-redux';

import { CheckoutItem } from './CheckoutItem';

export const Checkout = () => {
  const basketItems = useSelector((store) => store.cart.items);
  return (
    <>
      <Navbar />

      {basketItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </>
  );
};
