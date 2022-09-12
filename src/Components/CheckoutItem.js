/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { cart } from 'reducers/cart';

import { FaTrashAlt } from 'react-icons/fa';

import {
  ItemImage,
  CheckoutWrapper,
  CheckoutText,
  TrashWrapper,
  CheckoutQuantity,
  CheckoutPrice,
  CheckoutButton,
  CheckoutQuantityWrapper,
} from 'Styles/CheckoutStyle';

export const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  const multiply = (num1, num2) => {
    return num1 * num2;
  };
  let resultMultiply = multiply(item.price, item.quantity);

  return (
    <>
      <CheckoutWrapper>
        <ItemImage src={item.imageLink} />
        <CheckoutText>
          <CheckoutQuantityWrapper>
            <CheckoutButton
              type='button'
              onClick={() => dispatch(cart.actions.removeItem(item))}
            >
              -
            </CheckoutButton>
            <CheckoutQuantity>{item.quantity}</CheckoutQuantity>

            <CheckoutButton
              type='button'
              onClick={() => dispatch(cart.actions.addItem(item))}
            >
              +
            </CheckoutButton>
          </CheckoutQuantityWrapper>
          <CheckoutPrice>{resultMultiply}:-</CheckoutPrice>
        </CheckoutText>
      </CheckoutWrapper>
    </>
  );
};
