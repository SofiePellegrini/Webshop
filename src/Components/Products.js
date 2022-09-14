/* eslint-disable */
import React from 'react';
import { Product } from './Product';
import { useSelector } from 'react-redux';

import { Navbar } from 'Components/Navbar';
import { Footer } from './Footer';
import { PopularProducts } from './PopularProducts';

import { AllProducts } from 'Styles/ProductsStyle';

export const Products = () => {
  const allProducts = useSelector((store) => store.products);

  return (
    <>
      <Navbar />

      <AllProducts>
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </AllProducts>
      <PopularProducts />
      <Footer />
    </>
  );
};
