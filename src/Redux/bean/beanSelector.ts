import { RootState } from "../store";

export const beanSelector = (state: RootState) => {
  return state.bean;
};
