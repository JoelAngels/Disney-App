import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

//setting the redux store
export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
//===============================================================//
