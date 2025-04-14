import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const getHistory = createAsyncThunk("history", async (page: number) => {
  const { data } = await instance.get(
    `/MileStones?pageIndex=${page}&pageSize=16`
  );
  return data;
});
