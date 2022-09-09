/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';

export const PopularProduct = ({ popular }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{popular.title}</p>
    </>
  );
};
