/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { PopularProduct } from './PopularProduct';

import { PopularImage, PopularText } from 'Styles/PopularStyles';

export const PopularProducts = () => {
  const allPopular = useSelector((store) => store.popular);
  return (
    <>
      <PopularText>Popular now</PopularText>
      <ScrollMenu
        arrowLeft={<div style={{ fontSize: '30px' }}>{' < '}</div>}
        arrowRight={<div style={{ fontSize: '30px' }}>{' > '}</div>}
      >
        {allPopular.map((popular) => (
          <PopularImage src={popular.imageLink} />
        ))}
      </ScrollMenu>
    </>
  );
};
