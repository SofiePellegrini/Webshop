/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0px 15px 15px;
  background: rgba(255, 255, 255, 0.5);
  padding: 5px;
  width: 90%;
  border-radius: 10px;
`;

export const CheckoutText = styled.div`
  margin: 15px;
`;

export const ItemImage = styled.img`
  height: 200px;
`;

export const EmptyBagText = styled.h2`
  text-align: center;
  font-weight: normal;
`;

export const CheckoutTitle = styled.p`
  margin: 0;
`;

export const CheckoutItem = styled.p`
  margin: 0;
`;

export const CheckoutQuantity = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

export const CheckoutPrice = styled.p`
  margin: 0;
`;

export const CheckoutButton = styled.button`
  font-family: 'Josefin Sans', sans-serif;
  background-color: white;
  font-weight: bold;
  font-size: 18px;
  width: 30px;
  margin: 5px;
  border-radius: 10px;

  border: 1px solid black;
`;

export const CheckoutQuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
`;
