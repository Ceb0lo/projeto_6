import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import carrinhoReducer from './reducers/carrinho'
import enderecoReducer from './reducers/endereco'
import pagamentoReducer from './reducers/pagamento'
import modalReducer from './reducers/modal'
import confirmacaoReducer from './reducers/confirmacao'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    endereco: enderecoReducer,
    pagamento: pagamentoReducer,
    modal: modalReducer,
    confirmacao: confirmacaoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
