import { useState } from 'react'

import Modal from '../Modal'

import * as S from './styles'

type Props = {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  id: number
}

const CardPratos = ({ foto, nome, descricao, porcao, id, preco }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const getDescricaoCorte = (descricaoCorte: string) => {
    if (descricaoCorte.length > 200) {
      return descricaoCorte.slice(0, 200) + '...'
    }
    return descricaoCorte
  }
  return (
    <>
      <S.Card>
        <S.ImgCard src={foto} alt="Pizza" />
        <S.Titulo>{nome}</S.Titulo>
        <S.Texto>{getDescricaoCorte(descricao)}</S.Texto>
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
        id={id}
      />
    </>
  )
}

export default CardPratos
