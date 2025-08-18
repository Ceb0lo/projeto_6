import { createSlice } from '@reduxjs/toolkit'

type EnderecoState = {
  items: []
  enderecoEstaAberto: boolean
}

const initialState: EnderecoState = {
  items: [],
  enderecoEstaAberto: false
}

const enderecoSlice = createSlice({
  name: 'endereco',
  initialState,
  reducers: {
    enderecoAberto: (state) => {
      state.enderecoEstaAberto = true
    },
    enderecoFechado: (state) => {
      state.enderecoEstaAberto = false
    }
  }
})

export const { enderecoAberto, enderecoFechado } = enderecoSlice.actions
export default enderecoSlice.reducer
