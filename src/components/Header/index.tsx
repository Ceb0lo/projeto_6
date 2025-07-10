import logo from '../../assets/img/logo.png'

import { Fundo, Volta } from './styles'

const Header = () => (
  <Fundo>
    <Volta to="/">Restaurantes</Volta>
    <img src={logo} alt="Logo do eFood" />
    <span>0 produto(s) no carrinho</span>
  </Fundo>
)

export default Header
