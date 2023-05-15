import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Produtos from '../pages/Produtos'
import FinalizacaoCompra from '../pages/FinalizacaoCompra'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Produtos />} path='/produtos' />
        <Route element={<FinalizacaoCompra />} path='/finalizacaocompra' />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas