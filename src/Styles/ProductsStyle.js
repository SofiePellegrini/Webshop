/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

export const AllProducts = styled.div`
  @media (min-width: 668px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 75%;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 992px) {
    width: 25%;
    flex-direction: column;
    position: relative;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 50%;
    flex-direction: column;
    position: relative;
  }
`;

export const Image = styled.img`
  width: 97%;
  position: relative;
  margin: 5px 0px 5px 0px;
  vertical-align: middle;
  @media (min-width: 668px) {
    height: 450px;
  }
`;

export const ProductText = styled.div`
  position: absolute;
  z-index: 100;
  right: 10px;
  font-size: 18px;
  @media (min-width: 668px) {
    top: 15px;
    right: 15px;
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
