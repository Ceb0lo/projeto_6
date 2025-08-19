import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurante } from '../Home'
import Banner from '../../components/Banner'
import CardPratos from '../../components/CardPratos'
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import Carrinho from '../../components/Carrinho'
import Endereco from '../../components/Endereco'
import Pagamento from '../../components/Pagamento'
import Confirmacao from '../../components/Confirmacao'
import { Container } from '../../styles'

import { Lista } from './styles'

const Restaurantes = () => {
  const { id } = useParams()
  const restauranteId = parseInt(id || '', 10)

  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data))
      .catch((err) => console.error('Erro ao carregar API:', err))
  }, [])

  const restauranteSelecionado = restaurantes.find(
    (item) => item.id === restauranteId
  )

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Carrinho />
      <Endereco />
      <Pagamento />
      <Confirmacao />
      <Header />

      {restauranteSelecionado && (
        <Banner
          key={restauranteSelecionado.id}
          titulo={restauranteSelecionado.titulo}
          tipo={restauranteSelecionado.tipo}
          capa={restauranteSelecionado.capa}
        />
      )}

      <Container>
        <Lista>
          {restauranteSelecionado?.cardapio.map((prato) => (
            <CardPratos
              key={prato.id}
              foto={prato.foto}
              preco={prato.preco}
              nome={prato.nome}
              descricao={prato.descricao}
              porcao={prato.porcao}
              id={prato.id}
            />
          ))}
        </Lista>
      </Container>

      <Rodape />
    </>
  )
}

export default Restaurantes
