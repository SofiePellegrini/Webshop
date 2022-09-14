/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './sidescroll';

import {
  PopularImage,
  PopularText,
  PopularWrapper,
} from 'Styles/PopularStyles';

export const PopularProducts = () => {
  const allPopular = useSelector((store) => store.popular);

  return (
    <PopularWrapper>
      <PopularText>Popular now</PopularText>

      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {allPopular.map((popular) => (
          <PopularImage src={popular.imageLink} />
        ))}
      </ScrollMenu>
    </PopularWrapper>
  );
};
