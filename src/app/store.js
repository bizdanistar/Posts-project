import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSclice";
import usersReducer from "../features/users/usersSlice";
import isLoggedReducer from "../features/users/loginSlice";

export const store = configureStore({
  reducer: {
      posts: postsReducer,
      users: usersReducer,
      isLogged: isLoggedReducer,
  },
});
