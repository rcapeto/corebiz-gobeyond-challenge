import React, { useState } from 'react';

import './styles.css';

export default function FormNews({ setSuccessRegister }) {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [nameError, setNameError] = useState(false);
   const [emailError, setEmailError] = useState(false);
   const [formError, setFormError] = useState(false);

   async function handleAddNewsletter(event) {
      setEmailError(false);
      setNameError(false);
      setFormError(false);

      event.preventDefault();

      if(name && email) {
         const request = await fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', { 
            method: 'POST',
            body: JSON.stringify({ name, email }),
            headers: {
               'Content-Type': 'application/json'
            }
         });

         const response = await request.json();

         if(response.status === 'error') {
            setEmailError(true);
            setEmail('');
            setFormError(true);

         } else {
            setSuccessRegister(true);
         }

      } else {
         if(!name && !email) {
            setEmailError(true);
            setNameError(true);
            setFormError(true);

         } else if(!name) {
            setNameError(true);
            setFormError(true);

         } else if(!email) {
            setEmailError(true);
            setFormError(true);
         }
      }
   }

   return(
      <>
         <h2>Participe de nossas news com promoções e novidades!</h2>
         <form onSubmit={handleAddNewsletter} className={formError ? 'error' : ''}>
            <div className="input-block">
               <input 
                  type="text" 
                  name="name"
                  placeholder="Digite o seu nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={nameError ? 'error' : ''}
               />
               {nameError && <p>Preencha com o seu nome completo</p>}
               {!nameError && emailError && <br />}
            </div>
            <div className="input-block">
               <input 
                  type="text" 
                  name="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={emailError ? 'error' : ''}
               />
               {emailError && <p>Preencha com um e-mail válido</p> }
            </div>
            <button type="submit">Eu quero!</button>
         </form>
      </>
   );
}