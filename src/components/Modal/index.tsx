import { useDispatch } from 'react-redux'

import { add } from '../../store/reducers/carrinho'
import Close from '../../assets/img/close.png'
import { Container } from '../../styles'

import * as S from './styles'

type Props = {
  modalEstado: boolean
  fecharModal: () => void
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  id: number
}
const Modal = ({
  modalEstado,
  fecharModal,
  foto,
  preco,
  nome,
  descricao,
  porcao,
  id
}: Props) => {
  const transformaEmReal = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  const dispatch = useDispatch()
  const addCarrinho = () => {
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

  return (
    <S.Modal
      key={id}
      style={modalEstado ? { display: 'flex' } : { display: 'none' }}
    >
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
          <S.ImgClose src={Close} alt="fechar" onClick={fecharModal} />
        </S.CardCompra>
      </Container>
      <S.Overlay onClick={fecharModal} />
    </S.Modal>
  )
}

export default Modal
