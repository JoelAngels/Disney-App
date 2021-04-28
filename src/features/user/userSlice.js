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
    //when the user logs out, whip their data
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});
//we can now access all name, email and photo in any other files
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
