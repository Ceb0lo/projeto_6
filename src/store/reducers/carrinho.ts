import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CarrinhoState = {
  items: ItemCarrinho[]
  carrinhoEstaAberto: boolean
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
  carrinhoEstaAberto: false
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
    setQuantidade: (
      state,
      action: PayloadAction<{ id: number; quantidade: number }>
    ) => {
      const item = state.items.find((items) => items.id == action.payload.id)
      if (item) item.quantidade = action.payload.quantidade
    },
    carrinhoAberto: (state) => {
      state.carrinhoEstaAberto = true
    },
    carrinhoFechado: (state) => {
      state.carrinhoEstaAberto = false
    }
  }
})

export const { add, remove, carrinhoAberto, carrinhoFechado } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
