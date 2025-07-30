import logo from '../../assets/img/logo.png'

import * as S from './styles'

const Hero = () => (
  <S.Fundo>
    <S.Logo src={logo} alt="logo do Efood" />
    <S.Chamada>Viva experiências gastronômicas</S.Chamada>
    <S.Chamada>no conforto da sua casa</S.Chamada>
  </S.Fundo>
)

export default Hero
