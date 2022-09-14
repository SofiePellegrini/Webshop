/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { cart } from 'reducers/cart';

import {
  Image,
  ProductText,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductWrapper,
} from 'Styles/ProductsStyle';

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <ProductWrapper>
      <Image src={product.imageLink} />
      <ProductText>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price}:-</ProductPrice>
        <AddButton
          type='button'
          onClick={() => dispatch(cart.actions.addItem(product))}
        >
          Add to cart
        </AddButton>
      </ProductText>
    </ProductWrapper>
  );
};
