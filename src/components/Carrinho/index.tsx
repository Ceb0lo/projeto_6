import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { carrinhoFechado, remove } from '../../store/reducers/carrinho'
import { enderecoAberto } from '../../store/reducers/endereco'
import * as GS from '../../styles'

import * as S from './styles'

const Carrinho = () => {
  const dispatch = useDispatch()
  const transformaEmReal = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const { carrinhoEstaAberto, items } = useSelector(
    (state: RootReducer) => state.carrinho
  )

  const fechaCarrinho = () => {
    dispatch(carrinhoFechado())
  }
  const aberEndereco = () => {
    dispatch(carrinhoFechado())
    dispatch(enderecoAberto())
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
                <p>{transformaEmReal(prato.preco)}</p>
              </div>
              <button type="button" onClick={() => removePrato(prato.id)} />
            </S.Card>
          ))}
        </S.ListaItens>
        <S.ValorTotal>
          <span>Valor total</span>
          <span>{transformaEmReal(valorTotal())}</span>
        </S.ValorTotal>
        <GS.Botao onClick={aberEndereco}>Continuar com a entrega</GS.Botao>
      </GS.BarraLateral>
    </GS.BarraLateralContainer>
  )
}

export default Carrinho
