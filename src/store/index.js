import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signupSlice from "./signupSlice";
import favouriteSlice from "./favouriteSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import signinSlice from "./signinSlice";
import searchFilterSlice from "./searchFilterSlice";

const rootReducer = combineReducers({
  signup: signupSlice.reducer,
  signin: signinSlice.reducer,
  favourite: favouriteSlice.reducer,
  search: searchFilterSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["signup", "signin", "favourite"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const movieStore = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(movieStore);

export { movieStore, persistor };
