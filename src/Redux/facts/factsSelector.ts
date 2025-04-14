import { RootState } from "../store";

export const FactsSelector = (state: RootState) => {
  return state.facts;
};
