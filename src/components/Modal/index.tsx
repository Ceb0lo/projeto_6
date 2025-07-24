import Pizza from '../../assets/img/PizzaMarguerita.png'
import Close from '../../assets/img/close.png'
import { Container } from '../../styles'

import * as S from './styles'

type Props = {
  modalEstado: boolean
  fecharModal: () => void
}
const Modal = ({ modalEstado, fecharModal }: Props) => {
  return (
    <S.Modal style={modalEstado ? { display: 'flex' } : { display: 'none' }}>
      <Container>
        <S.CardCompra className="destaque">
          <S.ImgCompra src={Pizza} alt="Pizza de Marguerita" />
          <S.ContainerTexto>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <S.Botao>Adicionar ao carrinho - R$ 60,90</S.Botao>
          </S.ContainerTexto>
          <S.ImgClose src={Close} alt="fechar" onClick={fecharModal} />
        </S.CardCompra>
      </Container>
      <S.Overlay onClick={fecharModal} />
    </S.Modal>
  )
}

export default Modal
