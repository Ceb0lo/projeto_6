import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { carrinhoAberto } from '../../store/reducers/carrinho'
import { enderecoFechado } from '../../store/reducers/endereco'
import * as GS from '../../styles'

import * as S from './styles'

const Endereco = () => {
  const dispatch = useDispatch()
  const { enderecoEstaAberto } = useSelector(
    (state: RootReducer) => state.endereco
  )
  const volta = () => {
    dispatch(carrinhoAberto())
    dispatch(enderecoFechado())
  }
  return (
    <GS.BarraLateralContainer
      className={enderecoEstaAberto ? 'esta-aberto' : ''}
    >
      <GS.Overlay />
      <GS.BarraLateral>
        <S.Formulario>
          <h3>Entrega</h3>
          <label>Quem irá receber</label>
          <input type="text" />
          <label>Endereço</label>
          <input type="text" />
          <label>Cidade</label>
          <input type="text" />
          <div>
            <div>
              <label>CEP</label>
              <input type="number" />
            </div>
            <div>
              <label>Número</label>
              <input type="number" />
            </div>
          </div>
          <label>Complemento (opicional)</label>
          <input type="text" />
          <GS.Botao>Continuar com o pagamento</GS.Botao>
        </S.Formulario>
        <GS.Botao onClick={volta}>Voltar para o carrinho</GS.Botao>
      </GS.BarraLateral>
    </GS.BarraLateralContainer>
  )
}

export default Endereco
