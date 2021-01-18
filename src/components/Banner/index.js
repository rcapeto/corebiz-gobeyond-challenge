import React, { useState } from 'react';

//Imagens
import backgroundBlack from '../../assets/icons/blackground-black.svg';
import laptopImage from '../../assets/images/laptop.jpg';

import './styles.css';

export default function Banner() {
  const [liItems, setLiItems] = useState(['active', 'inactive', 'inactive', 'inactive']);

   function selectedLi(index) {
      const items = [...liItems];
  
      for(let i = 0; i < liItems.length; i++) {
        items[i] = 'inactive';
      }
  
      items[index] = 'active';
  
      setLiItems(items);
   }

   return(
      <>
      <div className="title-desktop">
          <div className="background-black-image"> 
            <div className="titles">
                <h4>Olá, o que você está buscando?</h4>
                <h3>Criar ou migrar seu <br/> e-commerce?</h3>
              </div> 
            <img src={backgroundBlack} alt="Moldura"/>
          </div>

          <div className="image-title">
            <img src={laptopImage} alt="Foto de fundo"/>
          </div>

          <ul className="list-items">
            {
              liItems.map((item, index) => (
                <li 
                  key={index}
                  onClick={() => selectedLi(index)}
                  className={item === 'active' ? 'active' : ''} 
                />
            ))}
          </ul>
        </div>
      
         {/* MOBILE */}

        <div className="title-mobile">
          <div >
            <div className="background-black">
              <div className="titles">
                <h4>Olá, o que você está buscando?</h4>
                <h3>Criar ou migrar seu e-commerce?</h3>
              </div>
            </div>
          </div>

          <ul className="list-items">
            {liItems.map((item, index) => (
                <li 
                  key={index}
                  onClick={() => selectedLi(index)}
                  className={item === 'active' ? 'active' : ''} 
                />
              ))}
          </ul>
        </div>
      </>
   );
}