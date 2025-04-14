import { RootState } from "../store";

export const beansSelector = (state: RootState) => {
  return state.beans;
};
