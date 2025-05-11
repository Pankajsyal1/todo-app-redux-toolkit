// store/feature/posts/postSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  isLoading: boolean;
  list: any[];
  single: any | null;
  isError: boolean;
}

const initialState: PostState = {
  isLoading: false,
  list: [],
  single: null,
  isError: false,
};

// Fetch all posts
export const fetchPosts = createAsyncThunk("posts/fetchAll", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

// Fetch post by ID
export const fetchPostsById = createAsyncThunk("posts/fetchById", async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(fetchPostsById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostsById.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.single = action.payload;
      })
      .addCase(fetchPostsById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default postSlice.reducer;
