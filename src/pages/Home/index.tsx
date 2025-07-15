import Rodape from '../../components/Rodape'
import Hero from '../../containers/Hero'
import Listagem from '../../containers/Listagem'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Hero alteraHero />
    <Container>
      <Listagem alteraLista />
    </Container>
    <Rodape />
  </>
)
export default Home
