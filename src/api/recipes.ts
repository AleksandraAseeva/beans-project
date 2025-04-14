import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const getRecipes = createAsyncThunk("recipes", async (page: number) => {
  const { data } = await instance.get(`/Recipes?pageIndex=${page}&pageSize=10`);
  return data;
});
