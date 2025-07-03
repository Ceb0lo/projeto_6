import img from '../../assets/img/logo.png'

import { Chamada, Fundo, Logo } from './styles'

const Hero = () => (
  <>
    <Fundo>
      <Logo src={img} alt="" />
      <Chamada>Viva experiências gastronômicas</Chamada>
      <Chamada>no conforto da sua casa</Chamada>
    </Fundo>
  </>
)

export default Hero
