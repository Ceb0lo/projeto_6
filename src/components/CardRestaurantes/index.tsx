import hiokiSushi from '../../assets/img/hiokiSushi.png'
import estrela from '../../assets/img/estrela.png'

import * as S from './styles'

const CardRestaurantes = () => (
  <S.Lista>
    <S.Card>
      <S.Teg>Japonesa</S.Teg>
      <S.ImgCard src={hiokiSushi} alt="Sushi" />
      <S.Cabecalho>
        <S.Titulo>Hioki Sushi</S.Titulo>
        <S.Nota>
          4.9
          <S.Estrela src={estrela} alt="Uma Estrela" />
        </S.Nota>
      </S.Cabecalho>
      <S.Texto>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </S.Texto>
      <S.BotaoSaiba to="/italiana">Saiba mais</S.BotaoSaiba>
    </S.Card>
  </S.Lista>
)

export default CardRestaurantes
