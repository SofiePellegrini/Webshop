/* eslint-disable */
import React from 'react';

import { IconContext } from 'react-icons';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

import { FooterWrapper, FooterIcons } from 'Styles/FooterStyle';

export const Footer = () => {
  return (
    <FooterWrapper>
      <IconContext.Provider value={{ size: '2em' }}>
        <FooterIcons>
          <BsFacebook />
        </FooterIcons>
        <FooterIcons>
          <AiFillInstagram />
        </FooterIcons>
      </IconContext.Provider>
    </FooterWrapper>
  );
};
