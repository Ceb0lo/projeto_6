import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { fechado, remove } from '../../store/reducers/carrinho'

import * as S from './styles'

const Carrinho = () => {
  const transformaEmReal = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const { estaAberto, items } = useSelector(
    (state: RootReducer) => state.carrinho
  )

  const dispatch = useDispatch()
  const fechaCarrinho = () => {
    dispatch(fechado())
  }

  const valorTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removePrato = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CardContainer className={estaAberto ? 'esta-aberto' : ''}>
      <S.Overlay onClick={fechaCarrinho} />
      <S.BarraLateral>
        <ul>
          {items.map((prato) => (
            <S.Card key={prato.id}>
              <S.ImgPrato src={prato.foto} alt="" />
              <div>
                <h3>{prato.nome}</h3>
                <p>{transformaEmReal(prato.preco)}</p>
              </div>
              <button type="button" onClick={() => removePrato(prato.id)} />
            </S.Card>
          ))}
        </ul>
        <S.ValorTotal>
          <span>Valor total</span>
          <span>{transformaEmReal(valorTotal())}</span>
        </S.ValorTotal>
        <S.BotaoCompra>Continuar com a entrega</S.BotaoCompra>
      </S.BarraLateral>
    </S.CardContainer>
  )
}

export default Carrinho
