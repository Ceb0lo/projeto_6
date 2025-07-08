import logo from '../../assets/img/logo.png'

import { Chamada, Fundo, Logo } from './styles'

const Hero = () => (
  <>
    <Fundo>
      <Logo src={logo} alt="logo do Efood" />
      <Chamada>Viva experiências gastronômicas</Chamada>
      <Chamada>no conforto da sua casa</Chamada>
    </Fundo>
  </>
)

export default Hero
