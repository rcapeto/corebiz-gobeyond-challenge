import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Product from '../Product';
import './styles.css';

export default function Carousel({ products, setProductsQuantity, productsQuantity }) {
  const [marginLeft, setMarginLeft] = useState(0);

  function carouselNext() {
   let x = marginLeft - 200;

   const listWidth = products.length * 250;

   if(x < -listWidth + 1000) {
     x = -listWidth + 1000;
   }
   
   setMarginLeft(x);
 }

 function carouselPrev() {
   let x = marginLeft + 200;

   if(x > 0) x = 0;

   setMarginLeft(x); 
 }

 function navigateProducts(e) {
   document.querySelector('#nav-products .active').classList.remove('active');
   e.target.classList.add('active');
 }
 
   return(
      <>
      <div className="center">
         <div className="products-sales">
            <FaAngleLeft size={20} color="black" className="icon-prev" onClick={carouselPrev}/>
            <FaAngleRight size={20} color="black" className="icon-next" onClick={carouselNext}/>
            <div className="products-width"
               style={{ width: products.length * 250, marginLeft }}
            >
               {products.map(product => (
                  <Product 
                     product={product} 
                     key={product.productId} 
                     setProductsQuantity={setProductsQuantity} 
                     productsQuantity={productsQuantity}
                  />
               ))} 
            </div>
         </div>
      </div>

      <div className="nav-products">
         <ul id="nav-products">
            <li className="active" onClick={navigateProducts}/>
            <li onClick={navigateProducts}/>
         </ul>
      </div>
      </>
   );
}