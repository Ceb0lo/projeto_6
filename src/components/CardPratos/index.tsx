import PizzaMarguerita from '../../assets/img/PizzaMarguerita.png'

import * as S from './styles'

const CardPratos = () => (
  <S.Card>
    <S.ImgCard src={PizzaMarguerita} alt="Pizza" />
    <S.Titulo>Pizza Marguerita</S.Titulo>
    <S.Texto>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </S.Texto>
    <S.Botao to="/italiana">Adicionar ao carrinho</S.Botao>
  </S.Card>
)

export default CardPratos
