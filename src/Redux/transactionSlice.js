import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch transactions
export const fetchTransactions = createAsyncThunk("transactions/fetch", async (userId) => {
  const response = await axios.get(`http://localhost:5000/api/transactions/${userId}`);
  return response.data;
});

// Transfer funds
export const transferFunds = createAsyncThunk("transactions/transfer", async (data) => {
  const response = await axios.post("http://localhost:5000/api/transactions/transfer", data);
  return response.data;
});

const transactionSlice = createSlice({
  name: "transactions",
  initialState: { transactions: [], loading: false, error: null },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(transferFunds.pending, (state) => {
        state.loading = true;
      })
      .addCase(transferFunds.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions.push(action.payload);
      })
      .addCase(transferFunds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
