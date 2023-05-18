import React, { useEffect, useState } from 'react';
import purchase from '../img/purchase.png'
import { Button } from '@mui/material'
import '../styles/style.css'
import { Link } from 'react-router-dom'

function FinalizacaoCompra() {

  const [nome, setNome] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const nome = JSON.parse(localStorage.getItem('nome'));
    const total = JSON.parse(localStorage.getItem('total'));
    if (nome) {
      setNome(nome);
    }
    if (total) {
      setTotal(total);
    }

  }, []);

  return (
    <div className="container">
      <div className="content">
        <h1>{nome}</h1>
        <h2>Sua compra no valor <span>R$ {total},00</span> foi finalizada com sucesso</h2>
        <img src={purchase} alt="" />
        <Button className="button" color='warning' variant='contained'>

          <Link to="/">
            Iniciar nova compra
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default FinalizacaoCompra;