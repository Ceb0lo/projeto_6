import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { carrinhoAberto } from '../../store/reducers/carrinho'
import { enderecoFechado } from '../../store/reducers/endereco'
import * as GS from '../../styles' //Global Style
import { pagamentoAberto } from '../../store/reducers/pagamento'

import * as S from './styles' //Style

const Endereco = () => {
  const dispatch = useDispatch()
  const { enderecoEstaAberto } = useSelector(
    (state: RootReducer) => state.endereco
  )
  const volta = () => {
    dispatch(carrinhoAberto())
    dispatch(enderecoFechado())
  }
  const aberPagamento = () => {
    dispatch(pagamentoAberto())
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
          <label htmlFor="nome">Quem irá receber</label>
          <input type="text" id="nome" />
          <label htmlFor="endereco">Endereço</label>
          <input type="text" id="endereco" />
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" />
          <div>
            <div>
              <label htmlFor="cpf">CEP</label>
              <input type="number" id="cpf" />
            </div>
            <div>
              <label htmlFor="numero">Número</label>
              <input type="number" id="numero" />
            </div>
          </div>
          <label htmlFor="complemento">Complemento (opicional)</label>
          <input type="text" id="complemento" />
          <GS.Botao onClick={aberPagamento}>Continuar com o pagamento</GS.Botao>
        </S.Formulario>
        <GS.Botao onClick={volta}>Voltar para o carrinho</GS.Botao>
      </GS.BarraLateral>
    </GS.BarraLateralContainer>
  )
}

export default Endereco
