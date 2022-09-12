/* eslint-disable */
import React from 'react';
import { Navbar } from './Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CheckoutItem } from './CheckoutItem';

import {
  EmptyBagText,
  CheckoutWrapper,
  EmptyButton,
} from 'Styles/CheckoutStyle';

export const Checkout = () => {
  const basketItems = useSelector((store) => store.cart.items);

  return (
    <>
      <Navbar />
      {basketItems.length === 0 && (
        <>
          <EmptyBagText>You have no bags in your shoppingbag yet.</EmptyBagText>

          <Link to='/' style={{ textDecoration: 'none' }}>
            <EmptyButton>Get me a bag!</EmptyButton>
          </Link>
        </>
      )}

      {basketItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </>
  );
};
