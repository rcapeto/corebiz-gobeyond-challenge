import React from 'react';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { FiUser } from 'react-icons/fi';

import logoImage from '../../assets/icons/logo.png';

import './styles.css';

export default function Header({ productsQuantity }) {
   return(
      <>
        <header className="desktop-header">
          <img src={logoImage} alt="Corebiz"/>

          <div className="search-desktop">
            <input type="text" placeholder="O que está procurando?"/>
            <BsSearch size={25} color="black" />
          </div>

          <div className="user-content">
            <FiUser size={25} color="black" />
            <p>Minha conta</p>
          </div>

          <div className="cart-header-desktop">
          <GiShoppingCart size={30} color="black"/>
            <div>
              {productsQuantity}
            </div>
          </div>
        </header>

        {/* HEADER MOBILE */}

        <header className="mobile-header">
          <FaBars size={30} color="black"/>
          <img src={logoImage} alt="Corebiz"/>
          <div className="cart-header-mobile">
            <GiShoppingCart size={30} color="black"/>
            <div>
              {productsQuantity}
            </div>
          </div>
        </header>
      </>
   );
}