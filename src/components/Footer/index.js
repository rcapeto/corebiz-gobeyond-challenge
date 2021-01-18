import React from 'react';

import mailImage from './image/mail.png';
import headPhoneImage from './image/headphone.png';
import corebizLogo from './image/corebiz.png';
import vtexLogo from './image/vtex.png';
import './styles.css';

export default function Footer() {
   return(
      <footer>
         <section className="address">
            <h3>Localização</h3>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p>Alphaville SP</p>
            <a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a>
            <a href="tel:+551130901039">+55 11 3090-1039</a>
         </section>

         <section className="contact">
            <ul>
               <li>
                  <img src={mailImage} alt="Entre em contato" />
                  <a href="/fale-conosco">Entre em contato</a>
               </li>

               <li>
                  <img src={headPhoneImage} alt="Fale Conosco" />
                  <a href="/chat">Fale com o nosso consultor online</a>
               </li>
            </ul>
         </section>
         <section className="created">
            <div>
               <p>Created by</p>
               <img src={corebizLogo} alt="Logo Corebiz" />
            </div>

            <div>
               <p>Powered by</p>
               <img src={vtexLogo} alt="Logo VTEX" />
            </div>
         </section>
      </footer>
   );
}