import React, { useState, useEffect } from 'react';
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
import { Button, TextField, InputLabel, MenuItem, FormControl, FormHelperText } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

function Produtos() {
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [total, setTotal] = useState(0)
  const [sex, setSex] = useState('')
  const [prods, setProds] = useState([
    {
      id: 1,
      img: produto1,
      name: "Airpods Apple Fones de Ouvido",
      price: 1499,
      info1: "Em até 12x de R$ 124,92",
      info2: "R$ 1.349 á vista (10% de desconto)",
      qnt: 0,
    },
    {
      id: 2,
      img: produto2,
      name: "Capa de silicone para iPhone 8/7 cor Areia - Rosa",
      price: 299,
      info1: "Em até 12x de R$ 24,92",
      info2: "R$ 269,10 á vista (10% de desconto)",
      qnt: 0,
    },
    {
      id: 3,
      img: produto3,
      name: "Apple Pencil",
      price: 729,
      info1: "Em até 12x de R$ 60,75",
      info2: "R$ 656,10 á vista (10% de desconto)",
      qnt: 0,
    },
    {
      id: 4,
      img: produto4,
      name: "Magic Mouse 2 - Prateado",
      price: 549,
      info1: "Em até 12x de R$ 45,75",
      info2: "R$ 468,10 á vista (10% de desconto)",
      qnt: 0,
    },
    {
      id: 5,
      img: produto5,
      name: "Caixa prateada de alumínio com pulseira esportiva branca",
      price: 2899,
      info1: "Em até 12x de R$ 241,58",
      info2: "R$ 2.609,10 á vista (10% de desconto)",
      qnt: 0,
    },
    {
      id: 6,
      img: produto6,
      name: "Cabo de lightning para USB (1m)",
      price: 149,
      info1: "Em até 12x de R$ 12,42",
      info2: "R$ 134,10 á vista (10% de desconto)",
      qnt: 0,
    },
    {
      id: 7,
      img: produto7,
      name: "Smart Keybord para iPad Pro 12,9 polegadas - Inglês (EUA)",
      price: 1099,
      info1: "Em até 12x de R$ 91,58",
      info2: "R$ 989,10 á vista (10% de desconto)",
      qnt: 0,
    },
    {
      id: 8,
      img: produto8,
      name: "Carregador USB de 5W Apple",
      price: 149,
      info1: "Em até 12x de R$ 12,42",
      info2: "R$ 134,10 á vista (10% de desconto)",
      qnt: 0,
    },
  ])


  const count = useSelector(state => state.counter.value)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setSex(event.target.value);
    setNome(event.target.value);
  };

  const handleAddItem = (item, index) => {
    const newItems = [...prods];
    newItems[index].qnt++;
    setTotal(previous => previous + newItems[index].price)
    setProds(newItems);
  };

  const handleDecrementItem = (item, index) => {
    const newItems = [...prods];
    newItems[index].qnt--;
    setTotal(previous => previous - newItems[index].price)
    setProds(newItems);
    dispatch(decrement(count))
  };

  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState("")

  const onSubmit = (nome) => {
    if (nome !== "") {
      navigate("/finalizacaocompra")
    } else {
      setError(true)
      setErrorText("Campo obrigatório")
      navigate("/")
    }
  }

  useEffect(() => {
    localStorage.setItem('nome', JSON.stringify(nome));
    localStorage.setItem('total', JSON.stringify(total));
  }, [nome, total]);

  return (
    <div className="container-produtos">
      <div className="content-produtos">
        <h2>Produtos</h2>
        <hr />
        <div className="produtos">
          {prods.map((item, index) => (
            <div className="item-produto">
              <img src={item.img} alt="" />
              <div className="info-produto">
                <h3>{item.name}</h3>
                <h4>{item.price}</h4>
                <h5>{item.info1}</h5>
                <h5>{item.info2}</h5>
                <div className='opcoes-produto'>
                  <div className='counter'>
                    <button disabled={item.qnt === 0} onClick={() => handleDecrementItem(item, index)}>
                      <span>-</span>
                    </button>
                    <input value={item.qnt} defaultValue={0} />
                    <button onClick={() => handleAddItem(item, index)}>
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
            <div className='form-dados'>
              <TextField required error={error} helperText={errorText} id="outlined-basic" placeholder='Nome do cliente aqui' label="Nome" variant="outlined" sx={{ mr: 2 }} fullWidth onChange={handleChange} value={nome} />
              <TextField type="email" id="outlined-basic" placeholder='Digite seu email aqui' label="Email" variant="outlined" fullWidth onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div>
              <FormControl sx={{ ml: 2, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                <Select placeholder='selecione' labelId="demo-simple-select-label" id="demo-simple-select" value={sex} label="Age" onChange={handleChange}>
                  <MenuItem value={1}>Masculino</MenuItem>
                  <MenuItem value={2}>Feminino</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="total">
            <h2 id="total">Total: {total}</h2>
            <Button className="button" color='warning' variant='contained' onClick={() => onSubmit(nome)}>
              Finalizar Compra
            </Button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Produtos;