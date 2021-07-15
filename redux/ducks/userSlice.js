import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: []
  },
  reducers: {
    getUser() {},
    setUser(state, action) {
      state.userData = action.payload;
    }
  }
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
