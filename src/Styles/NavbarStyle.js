/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 668px) {
    display: flex;
    flex-direction: row;
    width: 75%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavbarIcon = styled.div`
  margin-top: 7px;
`;

export const NavbarText = styled.h2`
  margin: 15px;
  font-weight: normal;
`;
