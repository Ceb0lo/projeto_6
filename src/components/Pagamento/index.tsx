import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { enderecoAberto } from '../../store/reducers/endereco'
import { pagamentoFechado } from '../../store/reducers/pagamento'
import * as GS from '../../styles' //Global Style
import { confirmacaoAberto } from '../../store/reducers/confirmacao'

import * as S from './styles' //Style

const Pagamento = () => {
  const dispatch = useDispatch()
  const { pagamentoEstaAberto } = useSelector(
    (state: RootReducer) => state.pagamento
  )
  const volta = () => {
    dispatch(enderecoAberto())
    dispatch(pagamentoFechado())
  }
  const aberConfirmacao = () => {
    dispatch(confirmacaoAberto())
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
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input type="text" id="nomeCartao" />
          <div>
            <div className="numeroC">
              <label htmlFor="numeroCartao">Número do cartão</label>
              <input type="number" id="numeroCartao" />
            </div>
            <div className="cvv">
              <label htmlFor="cvv">CVV</label>
              <input type="number" id="cvv" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="mesV">Mês de vencimento</label>
              <input type="number" id="mesV" />
            </div>
            <div>
              <label htmlFor="anoV">Ano do vencimento</label>
              <input type="number" id="anoV" />
            </div>
          </div>
          <GS.Botao onClick={aberConfirmacao}>Finalizar pagamento</GS.Botao>
        </S.Formulario>
        <GS.Botao onClick={volta}>Voltar para a edição de endereço</GS.Botao>
      </GS.BarraLateral>
    </GS.BarraLateralContainer>
  )
}

export default Pagamento
