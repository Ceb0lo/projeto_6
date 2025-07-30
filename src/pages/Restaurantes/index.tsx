import Banner from '../../components/Banner'
import CardPratos from '../../components/CardPratos'
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import { Container } from '../../styles'

const Restaurantes = () => (
  <>
    <Header />
    <Banner />
    <Container>
      <CardPratos />
    </Container>
    <Rodape />
  </>
)

export default Restaurantes
