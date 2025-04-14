import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import beanSlice from "./bean/beanSlice";
import beansSlice from "./beans/beansSlice";
import combinationsSlice from "./combinations/combinationsSlice";
import factsSlice from "./facts/factsSlice";
import historySlice from "./history/historySlice";
import recipesSlice from "./recipes/recipesSlice";
import reviewSlice from "./review/reviewSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reviewSlice)

export const store = configureStore({
  reducer: {
    beans: beansSlice,
    bean: beanSlice,
    facts: factsSlice,
    recipes: recipesSlice,
    combinations: combinationsSlice,
    history: historySlice,
    review: persistedReducer
  },
});

const persistor = persistStore(store)

export {persistor};


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


