import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Italiana from './pages/Italiana'
import { GlobalStyle } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/italiana',
    element: <Italiana />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
