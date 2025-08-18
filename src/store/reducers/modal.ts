import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ModalState = {
  modalAbertoId: number | null
}

const initialState: ModalState = {
  modalAbertoId: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalAberto: (state, action: PayloadAction<number>) => {
      state.modalAbertoId = action.payload
    },
    modalFechado: (state) => {
      state.modalAbertoId = null
    }
  }
})

export const { modalAberto, modalFechado } = modalSlice.actions
export default modalSlice.reducer
