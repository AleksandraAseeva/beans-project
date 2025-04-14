import { createSlice } from "@reduxjs/toolkit";
import { BeanState } from "../../types/state";
import { getBean } from "../../api/bean";

const initialState: BeanState = {
  isLoading: false,
  data: null,
  isError: false,
};

const beanSlice = createSlice({
  name: "bean",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBean.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = null;
    });
    builder.addCase(getBean.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getBean.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default beanSlice.reducer;
