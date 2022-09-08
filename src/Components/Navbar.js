/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';
import { IconContext } from 'react-icons';

import {
  NavbarWrapper,
  NavbarText,
  NavbarRight,
  NavbarIcon,
} from 'Styles/NavbarStyle';

export const Navbar = () => {
  const products = useSelector((store) => store.cart.items);

  const totalPrice = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );
  return (
    <NavbarWrapper>
      <NavbarText>BagLady</NavbarText>
      <NavbarRight>
        <NavbarIcon>
          <Link to='checkout' style={{ textDecoration: 'none' }}>
            <IconContext.Provider value={{ size: '2em' }}>
              <MdShoppingBasket />
            </IconContext.Provider>
          </Link>
        </NavbarIcon>
        <NavbarText>{totalPrice}:-</NavbarText>
      </NavbarRight>
    </NavbarWrapper>
  );
};
