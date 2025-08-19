import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { confirmacaoFechado } from '../../store/reducers/confirmacao'
import * as GS from '../../styles'

import { Texto } from './styles'

const Confirmacao = () => {
  const dispatch = useDispatch()
  const { confirmacaoEstaAberto } = useSelector(
    (state: RootReducer) => state.confirmacao
  )
  const confirma = () => {
    dispatch(confirmacaoFechado())
  }
  return (
    <GS.BarraLateralContainer
      className={confirmacaoEstaAberto ? 'esta-aberto' : ''}
    >
      <GS.Overlay />
      <GS.BarraLateral>
        <Texto>
          <h3>Pedido realizado - </h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <GS.Botao onClick={confirma}>Concluir</GS.Botao>
        </Texto>
      </GS.BarraLateral>
    </GS.BarraLateralContainer>
  )
}

export default Confirmacao
