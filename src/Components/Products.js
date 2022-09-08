/* eslint-disable */
import React from 'react';
import { Product } from './Product';
import { useSelector } from 'react-redux';

import { Navbar } from 'Components/Navbar';
import { Footer } from './Footer';

export const Products = () => {
  const allProducts = useSelector((store) => store.products);

  return (
    <>
      <Navbar />
      <div className='products'>
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};
