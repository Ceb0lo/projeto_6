import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'

import { RootReducer } from '../../store'
import { carrinhoFechado, remove } from '../../store/reducers/carrinho'
import { validacaoAberto } from '../../store/reducers/validacao'
import * as GS from '../../styles' //Global Style

import * as S from './styles' //Style

export const selectItensCarrinho = (state: RootReducer) => state.carrinho.items

export const selectTotalCarrinho = createSelector(
  [selectItensCarrinho],
  (itens) => itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
)

const Carrinho = () => {
  const dispatch = useDispatch()

  const { carrinhoEstaAberto, items } = useSelector(
    (state: RootReducer) => state.carrinho
  )

  const fechaCarrinho = () => {
    dispatch(carrinhoFechado())
  }
  const aberEndereco = () => {
    dispatch(carrinhoFechado())
    dispatch(validacaoAberto())
  }

  const total = useSelector(selectTotalCarrinho)

  const removePrato = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <GS.BarraLateralContainer
      className={carrinhoEstaAberto ? 'esta-aberto' : ''}
    >
      <GS.Overlay onClick={fechaCarrinho} />
      <GS.BarraLateral>
        <S.ListaItens>
          {items.map((prato) => (
            <S.Card key={prato.id}>
              <S.ImgPrato src={prato.foto} alt="" />
              <div>
                <h3>{prato.nome}</h3>
                <p>
                  {prato.preco.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </p>
              </div>
              <button type="button" onClick={() => removePrato(prato.id)} />
            </S.Card>
          ))}
        </S.ListaItens>
        <S.ValorTotal>
          <span>Valor total</span>
          <span>
            {total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </S.ValorTotal>
        <GS.Botao onClick={aberEndereco}>Continuar com a entrega</GS.Botao>
      </GS.BarraLateral>
    </GS.BarraLateralContainer>
  )
}

export default Carrinho
