import { createSlice } from '@reduxjs/toolkit'

type ValidacaoState = {
  validacaoEstaAberto: boolean
}

const initialState: ValidacaoState = {
  validacaoEstaAberto: false
}

const ValidacaoSlice = createSlice({
  name: 'validacao',
  initialState,
  reducers: {
    validacaoAberto: (state) => {
      state.validacaoEstaAberto = true
    },
    validacaoFechado: (state) => {
      state.validacaoEstaAberto = false
    }
  }
})

export const { validacaoAberto, validacaoFechado } = ValidacaoSlice.actions
export default ValidacaoSlice.reducer
