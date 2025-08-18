import * as S from './styles'

type Props = {
  titulo: string
  tipo: string
  capa: string
}

const Banner = ({ titulo, tipo, capa }: Props) => (
  <S.Banner capa={capa}>
    <p>{tipo}</p>
    <h2>{titulo}</h2>
  </S.Banner>
)

export default Banner
