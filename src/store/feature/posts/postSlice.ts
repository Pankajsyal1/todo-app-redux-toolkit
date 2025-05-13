// store/feature/posts/postSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  isLoading: boolean;
  list: Post[];
  single: Post | null;
  isError: boolean;
}

const initialState: PostState = {
  isLoading: false,
  list: [],
  single: null,
  isError: false,
};


// Add Post
export const addPost = createAsyncThunk(
  "posts/add",
  async (newPost: Omit<Post, "id">) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    return response.json();
  }
);

// Fetch all posts
export const fetchPosts = createAsyncThunk("posts/fetchAll", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

// Fetch post by ID
export const fetchPostById = createAsyncThunk("posts/fetchById", async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
});

// Delete post by ID
export const deletePost = createAsyncThunk("posts/delete", async (id: number) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  return id; // return the deleted post's ID
});

// Edit post
export const editPost = createAsyncThunk(
  "posts/edit",
  async ({ id, updatedData }: { id: number; updatedData: Partial<Post> }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    return response.json(); // returns updated post
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.list.unshift(action.payload);
      })
      // Fetch all
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // Fetch by ID
      .addCase(fetchPostById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action: PayloadAction<Post>) => {
        state.isLoading = false;
        state.single = action.payload;
      })
      .addCase(fetchPostById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // Delete post
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
        state.list = state.list.filter((post) => post.id !== action.payload);
      })

      // Edit post
      .addCase(editPost.fulfilled, (state, action: PayloadAction<Post>) => {
        const index = state.list.findIndex((post) => post.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
        if (state.single && state.single.id === action.payload.id) {
          state.single = action.payload;
        }
      });
  },
});

export default postSlice.reducer;
