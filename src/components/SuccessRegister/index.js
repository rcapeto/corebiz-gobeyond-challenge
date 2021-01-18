import React from 'react';

import './styles.css';

export default function SuccessRegister({ setSuccessRegister }) {
   return(
      <div className="success-register">
        <h3>Seu e-mail foi cadastrado com sucesso!</h3> 
        <p>A partir de agora você receberá as novidades e ofertas exclusivas.</p>

        <button onClick={() => setSuccessRegister(false)}>Cadastrar novo e-mail</button>
      </div>
   );
}