import React from 'react';
import purchase from '../img/purchase.png'
import { Button } from '@mui/material'
import '../styles/style.css'
import { Link } from 'react-router-dom'

function FinalizacaoCompra() {
  return (
    <div className="container">
      <div className="content">
        <h1>John Doe,</h1>
        <h2>Sua compra no valor <span>R$ 299,00</span> foi finalizada com sucesso</h2>
        <img src={purchase} alt="" />
        <Button className="button" color='warning' variant='contained'>

          <Link to="/produtos">
            Iniciar nova compra
          </Link>


        </Button>
      </div>
    </div>
  );
}

export default FinalizacaoCompra;