import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CarrinhoState = {
  items: ItemCarrinho[]
  estaAberto: boolean
}

type ItemCarrinho = {
  nome: string
  preco: number
  foto: string
  descricao: string
  porcao: string
  quantidade: number
  id: number
}

const initialState: CarrinhoState = {
  items: [],
  estaAberto: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemCarrinho>) => {
      const prato = state.items.find((item) => item.id == action.payload.id)

      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert(
          'Nao pode comer dois pratos iguais !(KKKK isso é só para mostrar a funcionalidade KK)'
        )
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    aberto: (state) => {
      state.estaAberto = true
    },
    fechado: (state) => {
      state.estaAberto = false
    }
  }
})

export const { add, remove, aberto, fechado } = carrinhoSlice.actions
export default carrinhoSlice.reducer
