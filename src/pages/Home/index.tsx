import CardRestaurantes from '../../components/CardRestaurantes'
import Rodape from '../../components/Rodape'
import Hero from '../../components/Hero'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Hero />
    <Container>
      <CardRestaurantes />
    </Container>
    <Rodape />
  </>
)
export default Home
