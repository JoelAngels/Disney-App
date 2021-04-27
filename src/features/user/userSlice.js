import { createSlice } from "@reduxjs/toolkit";

//When the apps starts keep everything empty
const initialState = {
  name: "",
  email: "",
  photo: "",
};
//========================================================
//When the user Logins in, Remember all the data
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
  },
});
