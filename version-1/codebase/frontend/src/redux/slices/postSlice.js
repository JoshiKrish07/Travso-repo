import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const apiUrl = import.meta.env.VITE_API_URL;


// Thunk for getAllPosts details
export const getAllPosts = createAsyncThunk(
  'auth/getAllPosts',
  async (_,{ rejectWithValue }) => {
    try {
    //   const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/allposts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      // console.log("=====data===in getAllPosts=>", data);
      return data;
    } catch (error) {
      console.log("error in getAllPosts call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for commentOnPost details
export const commentOnPost = createAsyncThunk(
  'auth/commentOnPost',
  async ({post_id,content},{ rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/comment-on-post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({post_id, content})
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log("=====data===in commentOnPost=>", data);
      return data;
    } catch (error) {
      console.log("error in commentOnPost call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for commentOnPost details
export const LikeUnlikePost = createAsyncThunk(
  'auth/LikeUnlikePost',
  async ({post_id},{ rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/like-unlike-post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({post_id})
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      // console.log("=====data===in LikeUnlikePost=>", data);
      return data;
    } catch (error) {
      console.log("error in LikeUnlikePost call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for getAllPosts details
export const getCommentOnPost = createAsyncThunk(
  'auth/getCommentOnPost',
  async (postId,{ rejectWithValue }) => {
    try {
      console.log("====postId===")
    //   const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/comments/${postId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log("=====data===in getCommentOnPost=>", data);
      return data;
    } catch (error) {
      console.log("error in getCommentOnPost call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    loading: false,
    error: null,
    allPosts: null,
    postComment: null,
  },
  reducers: {
    resetPostsState: (state) => {
      state.postComment = null;
      state.loading = false;
      state.error = null;
    },
   },
  extraReducers: (builder) => {
    builder
      // Handle getAllPosts
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = action.payload.data;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle commentOnPost
      .addCase(commentOnPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(commentOnPost.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(commentOnPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle LikeUnlikePost
      .addCase(LikeUnlikePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LikeUnlikePost.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(LikeUnlikePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle getCommentOnPost
      .addCase(getCommentOnPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCommentOnPost.fulfilled, (state, action) => {
        state.loading = false;
        state.postComment = action.payload.data;
      })
      .addCase(getCommentOnPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { resetPostsState } = postSlice.actions;
export default postSlice.reducer;
