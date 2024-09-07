import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/todo/todoSlice";
import userReducer from "./feature/user/userSlice";
import postReducer from "./feature/posts/postSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
    posts: postReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
