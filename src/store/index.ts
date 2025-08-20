import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import carrinhoReducer from './reducers/carrinho'
import modalReducer from './reducers/modal'
import confirmacaoReducer from './reducers/confirmacao'
import validacaoReducer from './reducers/validacao'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    validacao: validacaoReducer,
    modal: modalReducer,
    confirmacao: confirmacaoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
