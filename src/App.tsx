import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import Rotas from './routes'
import { GlobalStyle } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
