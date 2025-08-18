import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { enderecoAberto } from '../../store/reducers/endereco'
import { pagamentoFechado } from '../../store/reducers/pagamento'
import * as GS from '../../styles'

import * as S from './styles'

const Pagamento = () => {
  const dispatch = useDispatch()
  const { pagamentoEstaAberto } = useSelector(
    (state: RootReducer) => state.pagamento
  )
  const volta = () => {
    dispatch(enderecoAberto())
    dispatch(pagamentoFechado())
  }
  return (
    <GS.BarraLateralContainer
      className={pagamentoEstaAberto ? 'esta-aberto' : ''}
    >
      <GS.Overlay />
      <GS.BarraLateral>
        <S.Formulario>
          <h3>Pagamento - Valor a pagar xxxx</h3>
          <label>Nome no cartão</label>
          <input type="text" />
          <div>
            <div>
              <label>Número do cartão</label>
              <input type="number" />
            </div>
            <div>
              <label>CVV</label>
              <input type="number" />
            </div>
          </div>
          <div>
            <div>
              <label>Mês de vencimento</label>
              <input type="number" />
            </div>
            <div>
              <label>Ano do vencimento</label>
              <input type="number" />
            </div>
          </div>
          <GS.Botao>Finalizar pagamento</GS.Botao>
        </S.Formulario>
        <GS.Botao onClick={volta}>Voltar para a edição de endereço</GS.Botao>
      </GS.BarraLateral>
    </GS.BarraLateralContainer>
  )
}

export default Pagamento
