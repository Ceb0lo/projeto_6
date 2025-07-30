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
}
const Modal = ({
  modalEstado,
  fecharModal,
  foto,
  preco,
  nome,
  descricao,
  porcao
}: Props) => {
  return (
    <S.Modal style={modalEstado ? { display: 'flex' } : { display: 'none' }}>
      <Container>
        <S.CardCompra className="destaque">
          <S.ImgCompra src={foto} alt="Pizza de Marguerita" />
          <S.ContainerTexto>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve:{porcao}</p>
            <S.Botao>Adicionar ao carrinho - R${preco}</S.Botao>
          </S.ContainerTexto>
          <S.ImgClose src={Close} alt="fechar" onClick={fecharModal} />
        </S.CardCompra>
      </Container>
      <S.Overlay onClick={fecharModal} />
    </S.Modal>
  )
}

export default Modal
