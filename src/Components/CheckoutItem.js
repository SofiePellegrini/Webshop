/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { cart } from 'reducers/cart';

import { ItemImage } from 'Styles/CheckoutStyle';

export const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className='info'>
        <ItemImage src={item.imageLink} />
        <p>{item.title}</p>
      </div>

      <span className='actions'>
        <button
          type='button'
          onClick={() => dispatch(cart.actions.removeItem(item))}
        >
          -
        </button>
        <button
          type='button'
          onClick={() => dispatch(cart.actions.addItem(item))}
        >
          +
        </button>
      </span>
    </li>
  );
};
