/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { cart } from 'reducers/cart';

import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import {
  ItemImage,
  CheckoutWrapper,
  CheckoutText,
  CheckoutTitle,
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
  let resulMultiply = multiply(item.price, item.quantity);
  return (
    <CheckoutWrapper>
      <ItemImage src={item.imageLink} />
      <CheckoutText>
        <CheckoutQuantityWrapper>
          <CheckoutQuantity>{item.quantity}</CheckoutQuantity>
          <CheckoutButton
            type='button'
            onClick={() => dispatch(cart.actions.removeItem(item))}
          >
            -
          </CheckoutButton>
          <CheckoutButton
            type='button'
            onClick={() => dispatch(cart.actions.addItem(item))}
          >
            +
          </CheckoutButton>
        </CheckoutQuantityWrapper>
        <CheckoutPrice>
          {item.price}*{item.quantity}
        </CheckoutPrice>
      </CheckoutText>
    </CheckoutWrapper>
  );
};
