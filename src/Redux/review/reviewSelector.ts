import { RootState } from "../store";

export const reviewSelector = (state: RootState) => {
  return state.review;
};
