import React from 'react';
import produto1 from '../img/produto-01.jpeg'
import { Button, Fab, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

function Produtos() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="container-produtos">
      <div className="content-produtos">
        <h2>Produtos</h2>
        <hr />
        <div className="produtos">
          <div className="item-produto">
            <img src={produto1} alt="" />
            <div className="info-produto">
              <h3>Airpods Apple Fones de Ouvido</h3>
              <h4>R$ 1.499,00</h4>
              <h5>Em até 12x de R$ 124,92</h5>
              <h5>R$ 1.349 á vista (10% de desconto)</h5>
              <div className='opcoes-produto'>
                <div className='counter'>
                  <Fab onClick={() => dispatch(decrement())} size="small" >
                    -
                  </Fab>

                  <TextField className='count-value' variant='outlined' value={count} defaultValue={0} />

                  <Fab onClick={() => dispatch(increment())} size="small" >
                    +
                  </Fab>
                </div>
                <Button className="button" color="primary" variant="contained">Adicionar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;