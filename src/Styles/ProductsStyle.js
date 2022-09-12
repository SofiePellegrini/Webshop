/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 668px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 97%;
  position: relative;
  margin: 5px 0px 5px 0px;
  vertical-align: middle;
  @media (min-width: 668px) {
    width: 20%;
  }
`;

export const ProductText = styled.div`
  position: absolute;
  z-index: 100;
  right: 10px;
  font-size: 18px;
  @media (min-width: 668px) {
    left: 670px;
  }
`;

export const ProductPrice = styled.p`
  margin: 0;
`;

export const ProductTitle = styled.p`
  margin: 10px 5px 0px 0px;
  font-weight: bold;
`;

export const AddButton = styled.button`
  font-family: 'Josefin Sans', sans-serif;
  width: 100px;
  background-color: #ffe3a3;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid black;
`;
