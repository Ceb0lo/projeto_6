import { useDispatch, useSelector } from 'react-redux'

import Modal from '../Modal'
import { modalAberto } from '../../store/reducers/modal'
import { RootReducer } from '../../store'

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
  const dispatch = useDispatch()
  const modalAbertoId = useSelector(
    (state: RootReducer) => state.modal.modalAbertoId
  )

  const getDescricaoCorte = (descricaoCorte: string) => {
    if (descricaoCorte.length > 200) {
      return descricaoCorte.slice(0, 200) + '...'
    }
    return descricaoCorte
  }

  const abrirModal = () => {
    dispatch(modalAberto(id))
  }

  return (
    <>
      <S.Card>
        <S.ImgCard src={foto} alt="Foto do Prato" />
        <S.Titulo>{nome}</S.Titulo>
        <S.Texto>{getDescricaoCorte(descricao)}</S.Texto>
        <S.Botao onClick={abrirModal}>Adicionar ao carrinho</S.Botao>
      </S.Card>

      {modalAbertoId == id && (
        <Modal
          foto={foto}
          preco={preco}
          nome={nome}
          descricao={descricao}
          porcao={porcao}
          id={id}
        />
      )}
    </>
  )
}

export default CardPratos
