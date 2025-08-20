import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurante } from '../pages/Home'

type Products = {
  id: number
  price: number
}

type ComprarPayload = {
  products: Products[]
  delivery: {
    receiver: string //Nome
    address: {
      description: string //Endereço
      city: string //Cidade
      zipCode: string //CEP
      number: number //Número
      complement?: string //Complemento
    }
  }
  payment: {
    card: {
      name: string //Nome no cartão
      number: string //Número do cartão
      code: number //CVV
      expires: {
        month: number //Mês de vencimento
        year: number //Ano do vencimento
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante, void>({
      query: () => 'restaurantes'
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    comprar: builder.mutation<any, ComprarPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantesQuery, useComprarMutation } = api
export default api
