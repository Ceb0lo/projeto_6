import Hero from './components/Hero'
import Listagem from './components/Listagem'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Container>
        <Listagem />
      </Container>
    </>
  )
}

export default App
