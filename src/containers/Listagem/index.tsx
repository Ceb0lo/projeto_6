import CardPratos from '../../components/CardPratos'
import CardRestaurantes from '../../components/CardRestaurantes'

import * as S from './styles'

type Props = {
  alteraLista: boolean
}

const Listagem = ({ alteraLista }: Props) => {
  return (
    <>
      {alteraLista ? (
        <S.ListaRestaurantes>
          <CardRestaurantes />
          <CardRestaurantes />
          <CardRestaurantes />
          <CardRestaurantes />
          <CardRestaurantes />
          <CardRestaurantes />
        </S.ListaRestaurantes>
      ) : (
        <S.ListaPratos>
          <CardPratos />
          <CardPratos />
          <CardPratos />
          <CardPratos />
          <CardPratos />
          <CardPratos />
        </S.ListaPratos>
      )}
    </>
  )
}

export default Listagem
