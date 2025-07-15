import CardPratos from '../../components/CardPratos'
import CardRestaurantes from '../../components/CardRestaurantes'

import { ListaRestaurantes, ListaPratos } from './styles'

type Props = {
  alteraLista: boolean
}

const Listagem = ({ alteraLista }: Props) => {
  return (
    <>
      {alteraLista ? (
        <ListaRestaurantes>
          <CardRestaurantes />
          <CardRestaurantes />
          <CardRestaurantes />
          <CardRestaurantes />
          <CardRestaurantes />
          <CardRestaurantes />
        </ListaRestaurantes>
      ) : (
        <ListaPratos>
          <CardPratos />
          <CardPratos />
          <CardPratos />
          <CardPratos />
          <CardPratos />
          <CardPratos />
        </ListaPratos>
      )}
    </>
  )
}

export default Listagem
