import { RootState } from "../store";

export const RecipesSelector = (state: RootState) => {
  return state.recipes;
};
