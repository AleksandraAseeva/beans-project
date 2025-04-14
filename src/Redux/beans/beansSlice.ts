import { createSlice } from "@reduxjs/toolkit";
import { BeansState } from "../../types/state";
import { getBeans } from "../../api/beans";

const initialState: BeansState = {
  isLoading: false,
  data: [],
  isError: false,
  currentPage: 0,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
};

const beansSlice = createSlice({
  name: "beans",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBeans.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getBeans.fulfilled, (state, { payload }) => {
      state.data = [...state.data, ...payload.items];
      state.isLoading = false;
      state.currentPage = payload.currentPage;
      state.pageSize = payload.pageSize;
      state.totalCount = payload.totalCount;
      state.totalPages = payload.totalPages;
    });
    builder.addCase(getBeans.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default beansSlice.reducer;
