import Rodape from './components/Rodape'
import Hero from './containers/Hero'
import Listagem from './containers/Listagem'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Container>
        <Listagem />
      </Container>
      <Rodape />
    </>
  )
}

export default App
