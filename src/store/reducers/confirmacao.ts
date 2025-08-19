import { createSlice } from '@reduxjs/toolkit'

type ConfirmacaoState = {
  confirmacaoEstaAberto: boolean
}

const initialState: ConfirmacaoState = {
  confirmacaoEstaAberto: false
}

const confirmacaoSlice = createSlice({
  name: 'confirmacao',
  initialState,
  reducers: {
    confirmacaoAberto: (state) => {
      state.confirmacaoEstaAberto = true
    },
    confirmacaoFechado: (state) => {
      state.confirmacaoEstaAberto = false
    }
  }
})

export const { confirmacaoAberto, confirmacaoFechado } =
  confirmacaoSlice.actions
export default confirmacaoSlice.reducer
