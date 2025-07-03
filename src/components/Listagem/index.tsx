import img from '../../assets/img/hiokiSushi.png'

import * as S from './styles'

const Listagem = () => (
  <S.Lista>
    <S.Card>
      <S.Teg>Japonesa</S.Teg>
      <S.ImgCard src={img} alt="" />
      <S.Titulo>titListao</S.Titulo>
      <S.Nota>4.3</S.Nota>
      <S.Texto>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        aspernatur iure alias facere voluptate totam ducimus ab, quod
        consectetur libero nemo dolore maxime atque eum natus eligendi
        repudiandae voluptatibus. Temporibus!
      </S.Texto>
      <S.BotaoSaiba>Saiba mais</S.BotaoSaiba>
    </S.Card>
    <S.Card>
      <S.ImgCard src={img} alt="" />
      <S.Titulo>titListao</S.Titulo>
      <S.Nota>4.3</S.Nota>
      <S.Texto>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        aspernatur iure alias facere voluptate totam ducimus ab, quod
        consectetur libero nemo dolore maxime atque eum natus eligendi
        repudiandae voluptatibus. Temporibus!
      </S.Texto>
      <S.BotaoSaiba>Saiba mais</S.BotaoSaiba>
    </S.Card>
    <S.Card>
      <S.ImgCard src={img} alt="" />
      <S.Titulo>titListao</S.Titulo>
      <S.Nota>4.3</S.Nota>
      <S.Texto>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        aspernatur iure alias facere voluptate totam ducimus ab, quod
        consectetur libero nemo dolore maxime atque eum natus eligendi
        repudiandae voluptatibus. Temporibus!
      </S.Texto>
      <S.BotaoSaiba>Saiba mais</S.BotaoSaiba>
    </S.Card>
  </S.Lista>
)

export default Listagem
