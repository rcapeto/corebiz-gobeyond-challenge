import React from 'react';

import { transformPrice } from '../../utils/util';
import './styles.css';
import Stars from './stars';

export default function Product({ product, setProductsQuantity, productsQuantity }) {
  function handleAdd() {
    setProductsQuantity(productsQuantity + 1);
  }

  return(
    <div className="product-content">
      {product.listPrice && (
        <div className="off">
          <p>OFF</p>
          <div className="triangle"></div>
        </div>
      )}

      <img  src={product.imageUrl} alt={product.productName}/>
      <h4>{product.productName}</h4>

      <Stars grade={product.stars}/>

      <div className="prices">
        {
          product.listPrice ? (
            <p className="old-price">
              de R$ {transformPrice(product.listPrice)}
            </p>
            ) : null
        }

        {!product.listPrice && <br/>}

        <p className="current-price">
          por R$ {transformPrice(product.price)}
        </p>

      </div>

      {product.installments.length > 0 ? (
        <p className="parcel">
          ou em {product.installments[0].quantity}x de R$ {transformPrice(product.installments[0].value)}
        </p>
        ) : null
      }
      <button className="button" onClick={handleAdd}>Comprar</button>
    </div>
  );
}