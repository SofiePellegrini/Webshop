/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0px 15px 15px;
  background: rgba(255, 255, 255, 0.3);
  padding: 5px;
  width: 90%;
  border-radius: 10px;
  position: relative;
  @media (min-width: 668px) {
    width: 50%;
    margin: 0 auto;
    margin-top: 15px;
  }
`;

export const CheckoutText = styled.div`
  margin: 15px;
`;

export const ItemImage = styled.img`
  height: 200px;
  width: 150px;
`;

export const EmptyBagText = styled.h2`
  text-align: center;
  font-weight: normal;
`;

export const CheckoutTitle = styled.p`
  margin-left: 15px;
  font-size: 16px;
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
  font-size: 18px;
  margin-left: 15px;
`;

export const CheckoutButton = styled.button`
  font-family: 'Josefin Sans', sans-serif;
  background-color: transparent;
  cursor: pointer;
  font-size: 22px;
  width: 30px;
  margin: 5px;
  border-radius: 10px;
  border: none;
  transition: transform 0.2s;
`;

export const CheckoutQuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
`;

export const EmptyButton = styled.button`
  font-family: 'Josefin Sans', sans-serif;
  background-color: white;
  font-weight: normal;
  font-size: 18px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 992px) {
    :hover {
      transform: scale(1.1);
    }
  }
`;

export const TrashWrapper = styled.div`
  margin: 0;
  position: absolute;
`;
