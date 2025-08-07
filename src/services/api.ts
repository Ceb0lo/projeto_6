import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante, void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetRestaurantesQuery } = api
export default api
