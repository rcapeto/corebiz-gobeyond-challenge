import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import MobileSearch from './components/MobileSearch';

export default function App() {
  const [productsQuantity, setProductsQuantity] = useState(0);

  return (
    <div id="main-page">
      <Header productsQuantity={productsQuantity}/>
      <MobileSearch />
      <Main setProductsQuantity={setProductsQuantity} productsQuantity={productsQuantity}/>
      <Footer />
    </div>
  );
}