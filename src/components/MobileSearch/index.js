import React from 'react';
import { BsSearch } from 'react-icons/bs';

import './styles.css';

export default function MobileSearch() {
   return(
      <div className="mobile-search">
         <input type="text" placeholder="O que está procurando?"/>
         <BsSearch size={25} color="black" />
      </div>
   );
}