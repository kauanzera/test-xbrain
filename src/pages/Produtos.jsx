import React from 'react';
import produto1 from '../img/produto-01.jpeg'
import produto2 from '../img/produto-02.jpeg'
import produto3 from '../img/produto-03.jpeg'
import produto4 from '../img/produto-04.jpeg'
import produto5 from '../img/produto-05.jpeg'
import produto6 from '../img/produto-06.jpeg'
import produto7 from '../img/produto-07.jpeg'
import produto8 from '../img/produto-08.jpeg'
import add from '../img/baseline-add-24px.svg'
import remove from '../img/baseline-remove-24px.svg'
import { Button, Fab, TextField, InputLabel, MenuItem, FormControl } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom'

function Produtos() {
  const count = useSelector(state => state.counter.value)

  const dispatch = useDispatch()

  const [sex, setSex] = useState('');

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const prod = [
    {
      img: produto1,
      name: "Airpods Apple Fones de Ouvido",
      price: "R$ 1.499,00",
      info1: "Em até 12x de R$ 124,92",
      info2: "R$ 1.349 á vista (10% de desconto)",
    },
    {
      img: produto2,
      name: "Capa de silicone para iPhone 8/7 cor Areia - Rosa",
      price: "R$ 299,00",
      info1: "Em até 12x de R$ 24,92",
      info2: "R$ 269,10 á vista (10% de desconto)",
    },
    {
      img: produto3,
      name: "Apple Pencil",
      price: "R$ 729,00",
      info1: "Em até 12x de R$ 60,75",
      info2: "R$ 656,10 á vista (10% de desconto)",
    },
    {
      img: produto4,
      name: "Magic Mouse 2 - Prateado",
      price: "R$ 549,00",
      info1: "Em até 12x de R$ 45,75",
      info2: "R$ 468,10 á vista (10% de desconto)",
    },
    {
      img: produto5,
      name: "Caixa prateada de alumínio com pulseira esportiva branca",
      price: "R$ 2.899,00",
      info1: "Em até 12x de R$ 241,58",
      info2: "R$ 2.609,10 á vista (10% de desconto)",
    },
    {
      img: produto6,
      name: "Cabo de lightning para USB (1m)",
      price: "R$ 149,00",
      info1: "Em até 12x de R$ 12,42",
      info2: "R$ 134,10 á vista (10% de desconto)",
    },
    {
      img: produto7,
      name: "Smart Keybord para iPad Pro 12,9 polegadas - Inglês (EUA)",
      price: "R$ 1.099,00",
      info1: "Em até 12x de R$ 91,58",
      info2: "R$ 989,10 á vista (10% de desconto)",
    },
    {
      img: produto8,
      name: "Carregador USB de 5W Apple",
      price: "R$ 149,00",
      info1: "Em até 12x de R$ 12,42",
      info2: "R$ 134,10 á vista (10% de desconto)",
    },
  ]

  return (
    <div className="container-produtos">
      <div className="content-produtos">
        <h2>Produtos</h2>
        <hr />
        <div className="produtos">
          {prod.map((item) => (
            <div className="item-produto">
              <img src={item.img} alt="" />
              <div className="info-produto">
                <h3>{item.name}</h3>
                <h4>{item.price}</h4>
                <h5>{item.info1}</h5>
                <h5>{item.info2}</h5>
                <div className='opcoes-produto'>
                  <div className='counter'>
                    <button onClick={() => dispatch(decrement())}>
                      <span>-</span>
                    </button>

                    <input value={count} defaultValue={0} />

                    <button onClick={() => dispatch(increment())}>
                      <span>+</span>
                    </button>
                  </div>
                  <Button className="button" color="primary" variant="contained">Adicionar</Button>
                </div>
              </div>

            </div>
          ))}
        </div>
        <h2>Dados do Cliente</h2>
        <hr />
        <div className="dados-cli">
          <div className="formulario">
            <TextField id="outlined-basic" placeholder='Nome do cliente aqui' label="Nome" variant="outlined" sx={{ mr: 2 }} fullWidth />
            <TextField id="outlined-basic" placeholder='Digite seu email aqui' label="Email" variant="outlined" fullWidth />
            <FormControl sx={{ ml: 2, minWidth: 180 }}>
              <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
              <Select placeholder='selecione'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sex}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={20}>Masculino</MenuItem>
                <MenuItem value={30}>Feminino</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="total">
            <h2 id="total">Total:R$ 299,00</h2>
            <Button className="button" color='warning' variant='contained'>
              <Link to="/finalizacaocompra">
                Finalizar Compra
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;