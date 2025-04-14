import { RootState } from "../store";

export const combinationsSelector = (state: RootState) => {
  return state.combinations;
};
