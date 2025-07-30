import * as S from './styles'

type Props = {
  titulo: string
  tipo: string
}

const Banner = ({ titulo, tipo }: Props) => (
  <S.Banner>
    <p>{tipo}</p>
    <h2>{titulo}</h2>
  </S.Banner>
)

export default Banner
