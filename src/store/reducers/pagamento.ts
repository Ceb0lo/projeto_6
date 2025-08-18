import { createSlice } from '@reduxjs/toolkit'

type PagamentoState = {
  items: []
  pagamentoEstaAberto: boolean
}

const initialState: PagamentoState = {
  items: [],
  pagamentoEstaAberto: false
}

const pagamentoSlice = createSlice({
  name: 'pagamento',
  initialState,
  reducers: {
    pagamentoAberto: (state) => {
      state.pagamentoEstaAberto = true
    },
    pagamentoFechado: (state) => {
      state.pagamentoEstaAberto = false
    }
  }
})

export const { pagamentoAberto, pagamentoFechado } = pagamentoSlice.actions
export default pagamentoSlice.reducer
