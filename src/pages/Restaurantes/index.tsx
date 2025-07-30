import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import CardPratos from '../../components/CardPratos'
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import { Container } from '../../styles'
import { Restaurante } from '../Home'

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

  return (
    <>
      <Header />

      {restauranteSelecionado && (
        <Banner
          key={restauranteSelecionado.id}
          titulo={restauranteSelecionado.titulo}
          tipo={restauranteSelecionado.tipo}
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
            />
          ))}
        </Lista>
      </Container>

      <Rodape />
    </>
  )
}

export default Restaurantes
