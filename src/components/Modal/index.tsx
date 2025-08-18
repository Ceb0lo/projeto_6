import { useDispatch, useSelector } from 'react-redux'

import { add, carrinhoAberto } from '../../store/reducers/carrinho'
import Close from '../../assets/img/close.png'
import { Container, Overlay } from '../../styles'
import { RootReducer } from '../../store'
import { modalFechado } from '../../store/reducers/modal'

import * as S from './styles'

type Props = {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  id: number
}
const Modal = ({ foto, preco, nome, descricao, porcao, id }: Props) => {
  const { modalAbertoId } = useSelector((state: RootReducer) => state.modal)
  const transformaEmReal = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  const dispatch = useDispatch()
  const addCarrinho = () => {
    dispatch(modalFechado())
    dispatch(carrinhoAberto())
    dispatch(
      add({
        nome,
        id,
        preco,
        foto,
        descricao,
        porcao,
        quantidade: 1
      })
    )
  }
  const fechaModal = () => {
    dispatch(modalFechado())
  }

  return (
    <S.Modal key={id} className={modalAbertoId ? 'visevel' : ''}>
      <Container>
        <S.CardCompra className="destaque">
          <S.ImgCompra src={foto} alt="Pizza de Marguerita" />
          <S.ContainerTexto>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve de {porcao}</p>
            <S.Botao onClick={addCarrinho}>
              Adicionar ao carrinho - {transformaEmReal(preco)}
            </S.Botao>
          </S.ContainerTexto>
          <S.ImgClose src={Close} alt="fechar" onClick={fechaModal} />
        </S.CardCompra>
      </Container>
      <Overlay onClick={fechaModal} />
    </S.Modal>
  )
}

export default Modal
