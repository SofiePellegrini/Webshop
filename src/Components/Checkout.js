/* eslint-disable */
import React from 'react';
import { Navbar } from './Navbar';
import { useSelector } from 'react-redux';

import { CheckoutItem } from './CheckoutItem';

import { EmptyBagText, CheckoutWrapper } from 'Styles/CheckoutStyle';

export const Checkout = () => {
  const basketItems = useSelector((store) => store.cart.items);

  return (
    <>
      <Navbar />
      {basketItems.length === 0 && (
        <EmptyBagText>You have no bags in your shoppingbag yet.</EmptyBagText>
      )}

      {basketItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </>
  );
};
