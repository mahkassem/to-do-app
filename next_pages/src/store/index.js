import { createSlice, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user:{}
  },
  reducers: {
    setAuthTrue(state) {
      state.isAuth = true;
    },
    setAuthFalse(state) {
      state.isAuth = false;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    deleteUser(state, action) {
      state.user = {};
    },
  },
});



export const { setAuthTrue, setAuthFalse,setUser } = authSlice.actions;

const store = configureStore({
  reducer: authSlice.reducer,
});

export default store;
store.subscribe(()=>{});


