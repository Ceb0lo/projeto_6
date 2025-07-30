import { useEffect, useState } from 'react'

import CardRestaurantes from '../../components/CardRestaurantes'
import Rodape from '../../components/Rodape'
import Hero from '../../components/Hero'
import { Container } from '../../styles'

import { Lista } from './styles'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data))
      .catch((err) => console.error('Erro ao carregar API:', err))
  }, [])

  return (
    <>
      <Hero />
      <Container>
        <Lista>
          {restaurantes.map((item) => (
            <CardRestaurantes
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              destacado={item.destacado}
              avaliacao={item.avaliacao}
              descricao={item.descricao}
              capa={item.capa}
            />
          ))}
        </Lista>
      </Container>
      <Rodape />
    </>
  )
}

export default Home
