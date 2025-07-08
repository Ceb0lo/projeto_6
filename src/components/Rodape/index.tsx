import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import twtter from '../../assets/img/twtter.png'
import logo from '../../assets/img/logo.png'

import * as S from './styles'
const Rodape = () => (
  <S.Footer>
    <img src={logo} alt="logo do Efood" />
    <S.RedeSociais>
      <S.Social href="#">
        <img src={facebook} alt="logo do facebook" />
      </S.Social>
      <S.Social href="#">
        <img src={twtter} alt="Descanse em paz, demorou muito para ir" />
      </S.Social>
      <a href="#">
        <img src={instagram} alt="logo doinstagram" />
      </a>
    </S.RedeSociais>
    <S.TextoDoRodape>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
    </S.TextoDoRodape>
    <S.TextoDoRodape>
      dos produtos é toda do estabelecimento contratado.
    </S.TextoDoRodape>
  </S.Footer>
)

export default Rodape
