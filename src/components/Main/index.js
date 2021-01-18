import React, { useState, useEffect } from 'react';

//Componentes
import SuccessRegister from '../SuccessRegister';
import FormNews from '../FormNews';
import Carousel from '../Carousel';
import Banner from '../Banner';

import './styles.css';

export default function Main({ setProductsQuantity, productsQuantity }) {
  const [products, setProducts] = useState([]);
  const [successRegister, setSuccessRegister] = useState(false);
  
  async function getAllProducts() {
    const request = await fetch('https://corebiz-test.herokuapp.com/api/v1/products');
    const response = await request.json();

    //Para testar o carousel no desktop
    // setProducts([...response, ...response]);
    setProducts(response);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

   return(
      <main>
        
          <Banner />

          <div className="sales">
            <h2>Mais Vendidos</h2>
          </div>

          <Carousel 
            products={products}
            setProductsQuantity={setProductsQuantity}
            productsQuantity={productsQuantity}
            
          />
          <div className="form-news">
            {
              successRegister ? (
                <SuccessRegister setSuccessRegister={setSuccessRegister}/>
              ) : (
                <FormNews setSuccessRegister={setSuccessRegister}/>
              )
            }
          </div>
      </main>
   );
}