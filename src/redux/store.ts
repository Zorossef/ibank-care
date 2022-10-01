// this is a store
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducers from "./rootReducers";

// const NODE_ENV = process.env.NODE_ENV;

function configureAppStore() {
  const middleware = [thunk];
  const loggerV: any = logger;
  if (process.env.NODE_ENV === "development") {
    middleware.push(loggerV);
  }

  const store = configureStore({
    reducer: rootReducers,
    middleware,
  });

  return store;
}
const store = configureAppStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default configureAppStore;
