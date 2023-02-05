import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: " users",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
    message: "",
  },
  reducers: {
    //GET ALL USERS
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
      state.users.error = false;
    },
    getUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    //DELETE USERS
    deleteUsersStart: (state) => {
      state.users.isFetching = true;
    },
    deleteUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.message = action.payload;
    },
    deleteUsersFailed: (state, action) => {
      state.users.isFetching = false;
      state.users.error = true;
      state.message = action.payload;
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailed,
  deleteUsersStart,
  deleteUsersSuccess,
  deleteUsersFailed,
} = userSlice.actions;
export default userSlice.reducer;
