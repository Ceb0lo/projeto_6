import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Restaurante } from '../../pages/Home'

type CarrinhoState = {
  items: Restaurante[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurante>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = carrinhoSlice.actions
export default carrinhoSlice.reducer
