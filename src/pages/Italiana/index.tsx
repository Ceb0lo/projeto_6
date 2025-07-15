import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import Hero from '../../containers/Hero'
import Listagem from '../../containers/Listagem'
import { Container } from '../../styles'

const Italiana = () => (
  <>
    <Header />
    <Hero alteraHero={false} />
    <Container>
      <Listagem alteraLista={false} />
    </Container>
    <Rodape />
  </>
)

export default Italiana
