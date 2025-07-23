import { useState } from 'react'

import PizzaMarguerita from '../../assets/img/PizzaMarguerita.png'
import Modal from '../Modal'

import * as S from './styles'

const CardPratos = () => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <>
      <S.Card>
        <S.ImgCard src={PizzaMarguerita} alt="Pizza" />
        <S.Titulo>Pizza Marguerita</S.Titulo>
        <S.Texto>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </S.Texto>
        <S.Botao onClick={() => setModalEstaAberto(true)}>
          Adicionar ao carrinho
        </S.Botao>
      </S.Card>
      <Modal
        modalEstado={modalEstaAberto}
        fecharModal={() => setModalEstaAberto(false)}
      />
    </>
  )
}

export default CardPratos
