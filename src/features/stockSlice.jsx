import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firms: [{}],
  products: [],
  sales: [],
  purchases: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.error = false
    },
    getFirmsSuccess: (state, { payload }) => {
      state.loading = false
      state.firms = payload
    },
    getSalesSuccess: (state, { payload }) => {
      state.loading = false
      state.sales = payload
    },
    // action:{type:"", payload:""}

    getStockSuccess: (state, { payload }) => {
      state.loading = false
      state[payload.path] = payload.data
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {
  fetchStart,
  getFirmsSuccess,
  getSalesSuccess,
  getStockSuccess,
  fetchFail,
} = stockSlice.actions

export default stockSlice.reducer
