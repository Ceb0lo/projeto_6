import estrela from '../../assets/img/estrela.png'

import * as S from './styles'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
}

const CardRestaurantes = ({
  id,
  titulo,
  destacado,
  avaliacao,
  descricao,
  capa,
  tipo
}: Props) => {
  return (
    <S.Card>
      <S.ImgCard src={capa} alt="Capa do restaurante" />
      <S.ContainerTag>
        <S.Tag>{tipo}</S.Tag>
        <S.Tag style={destacado ? { display: 'block' } : { display: 'none' }}>
          Destaque
        </S.Tag>
      </S.ContainerTag>
      <S.Cabecalho>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Nota>
          {avaliacao}
          <S.Estrela src={estrela} alt="Uma Estrela" />
        </S.Nota>
      </S.Cabecalho>
      <S.Texto>{descricao}</S.Texto>
      <S.BotaoSaiba to={`/restaurantes/${id}`}>Saiba mais</S.BotaoSaiba>
    </S.Card>
  )
}

export default CardRestaurantes
