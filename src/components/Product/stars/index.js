import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

import './styles.css';

export default function Stars({ grade }) {
   const stars = [0, 0, 0, 0, 0];

   for(let i = 0; i < grade; i++) {
      stars[i] = 1; 
   }

   return(
      <div className="stars">
        {stars.map((item, index) => (
            item === 0 ? (
               <BsStar size={14} color="#F8475F" key={index}/>
            ) : (
               <BsStarFill size={14} color="#F8475F" key={index}/>
            )
        ))}
      </div>
   );
}