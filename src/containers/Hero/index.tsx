import logo from '../../assets/img/logo.png'

import * as S from './styles'

type Props = {
  alteraHero: boolean
}

const Hero = ({ alteraHero }: Props) => {
  return (
    <>
      {alteraHero ? (
        <S.Fundo>
          <S.Logo src={logo} alt="logo do Efood" />
          <S.Chamada>Viva experiências gastronômicas</S.Chamada>
          <S.Chamada>no conforto da sua casa</S.Chamada>
        </S.Fundo>
      ) : (
        <S.Banner>
          <p>Italiana</p>
          <h2>La Dolce Vita Trattoria</h2>
        </S.Banner>
      )}
    </>
  )
}

export default Hero
