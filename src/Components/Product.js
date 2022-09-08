/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { cart } from 'reducers/cart';

import { Image, ProductText } from 'Styles/ProductsStyle';

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ProductText>
        <p>{product.title}</p>
        <p>{product.price}:-</p>
        <Image src={product.imageLink} />
      </ProductText>

      <button
        type='button'
        onClick={() => dispatch(cart.actions.addItem(product))}
      >
        Add to cart
      </button>
    </>
  );
};
