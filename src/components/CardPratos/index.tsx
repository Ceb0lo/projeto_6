import { useState } from 'react'

import Modal from '../Modal'

import * as S from './styles'

type Props = {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const CardPratos = ({ foto, nome, descricao, porcao, preco }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <>
      <S.Card>
        <S.ImgCard src={foto} alt="Pizza" />
        <S.Titulo>{nome}</S.Titulo>
        <S.Texto>{descricao}</S.Texto>
        <S.Botao onClick={() => setModalEstaAberto(true)}>
          Adicionar ao carrinho
        </S.Botao>
      </S.Card>
      <Modal
        modalEstado={modalEstaAberto}
        fecharModal={() => setModalEstaAberto(false)}
        foto={foto}
        preco={preco}
        nome={nome}
        descricao={descricao}
        porcao={porcao}
      />
    </>
  )
}

export default CardPratos
