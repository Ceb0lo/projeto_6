import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italiana" element={<Restaurantes />} />
  </Routes>
)

export default Rotas
