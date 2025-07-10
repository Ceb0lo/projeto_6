import Rodape from '../../components/Rodape'
import Hero from '../../containers/Hero'
import Listagem from '../../containers/Listagem'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Hero />
    <Container>
      <Listagem />
    </Container>
    <Rodape />
  </>
)
export default Home
