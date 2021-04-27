import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

//setting the redux store
export default configureStore({
  reducer: {},
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
//===============================================================//
