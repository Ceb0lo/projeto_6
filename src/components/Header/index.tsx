import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { aberto } from '../../store/reducers/carrinho'
import logo from '../../assets/img/logo.png'

import { Fundo, Volta } from './styles'

const Header = () => {
  const dispatch = useDispatch()

  const abreCarrinho = () => {
    dispatch(aberto())
  }

  const { items } = useSelector((state: RootReducer) => state.carrinho)
  return (
    <Fundo>
      <Volta to="/">Restaurantes</Volta>
      <img src={logo} alt="Logo do eFood" />
      <span onClick={abreCarrinho}>{items.length} produto(s) no carrinho</span>
    </Fundo>
  )
}

export default Header
