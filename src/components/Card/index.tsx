import hiokiSushi from '../../assets/img/hiokiSushi.png'
import estrela from '../../assets/img/estrela.png'

import * as S from './styles'

const Card = () => (
  <S.Card>
    <S.Teg>Japonesa</S.Teg>
    <S.ImgCard src={hiokiSushi} alt="Sushi" />
    <S.Cabecalho>
      <S.Titulo>titListao</S.Titulo>
      <S.Nota>
        4.3
        <S.Estrela src={estrela} alt="Uma Estrela" />
      </S.Nota>
    </S.Cabecalho>
    <S.Texto>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
      aspernatur iure alias facere voluptate totam ducimus ab, quod consectetur
      libero nemo dolore maxime atque eum natus eligendi repudiandae
      voluptatibus. Temporibus!
    </S.Texto>
    <S.BotaoSaiba>Saiba mais</S.BotaoSaiba>
  </S.Card>
)

export default Card
