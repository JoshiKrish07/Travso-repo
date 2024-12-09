import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const apiUrl = import.meta.env.VITE_API_URL;


// Thunk for getAllPosts details
export const getAllPosts = createAsyncThunk(
  'post/getAllPosts',
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
  'post/commentOnPost',
  async (commentData,{ rejectWithValue }) => {
    console.log("=====commentData====>", commentData);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/comment-on-post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(commentData)
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

// Thunk for LikeUnlikePost details
export const LikeUnlikePost = createAsyncThunk(
  'post/LikeUnlikePost',
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
  'post/getCommentOnPost',
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

      // console.log("=====data===in getCommentOnPost=>", data);
      return data;
    } catch (error) {
      console.log("error in getCommentOnPost call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for likeAnyComment details
export const likeAnyComment = createAsyncThunk(
  'auth/likeAnyComment',
  async (commentId,{ rejectWithValue }) => {
    try {
      console.log("======commentId======",commentId);
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/like-a-comment/${commentId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log("=====data===in likeAnyComment===>", data);
      return data;
    } catch (error) {
      console.log("error in likeAnyComment call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);


// Thunk for commentOnReply details
export const commentOnReply = createAsyncThunk(
  'post/commentOnReply',
  async (replyData,{ rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/reply-on-comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(replyData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log("=====data===in commentOnReply===>", data);
      return data;
    } catch (error) {
      console.log("error in commentOnReply call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);


// Thunk for commitPost details
export const commitPost = createAsyncThunk(
  'post/commitPost',
  async (postData,{ rejectWithValue }) => {
    try {
  
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/commit-post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log("=====data===in commentOnReply===>", data);
      return data;
    } catch (error) {
      console.log("error in commentOnReply call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);


// Thunk for deleteComment details(user can delete comment on it's post)
export const deleteCommentByPostOwner = createAsyncThunk(
  'post/deleteCommentByPostOwner',
  async (commentId,{ rejectWithValue }) => {
    try {
      console.log("======commentId======",commentId);
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/owner-delete-comment/${commentId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log("=====data===in deleteCommentByPostOwner===>", data);
      return data;
    } catch (error) {
      console.log("error in deleteCommentByPostOwner call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for deleteComment details(user can delete comment on it's post)
export const deleteReplyByPostOwner = createAsyncThunk(
  'post/deleteReplyByPostOwner',
  async (replyId,{ rejectWithValue }) => {
    try {
      console.log("======commentId======",replyId);
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/owner-delete-reply/${replyId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log("=====data===in deleteReplyByPostOwner===>", data);
      return data;
    } catch (error) {
      console.log("error in deleteReplyByPostOwner call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);


// Thunk for followUnfollow details
export const followUnfollow = createAsyncThunk(
  'post/followUnfollow',
  async (followeeId,{ rejectWithValue }) => {
    try {
      
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/follow-unfollow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 'follwee_id': followeeId})
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      // console.log("=====data===in followUnfollow===>", data);
      return data;
    } catch (error) {
      console.log("error in followUnfollow call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for likeUnlikeAnyReply details
export const likeUnlikeAnyReply = createAsyncThunk(
  'post/likeUnlikeAnyReply',
  async (replyId,{ rejectWithValue }) => {
    try {
      console.log("======replyId======",replyId);
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/like-unlike-reply/${replyId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      // console.log("=====data===in likeUnlikeAnyReply===>", data);
      return data;
    } catch (error) {
      console.log("error in likeUnlikeAnyReply call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for SharePostWithFriends details
export const SharePostWithFriends = createAsyncThunk(
  'post/SharePostWithFriends',
  async (shareData,{ rejectWithValue }) => {
    try {
  
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/share-post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(shareData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      // console.log("=====data===in SharePostWithFriends===>", data);
      return data;
    } catch (error) {
      console.log("error in SharePostWithFriends call thunk", error.message)
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for followUnfollowOnFollowing details
export const followUnfollowOnFollowing = createAsyncThunk(
  'post/followUnfollowOnFollowing',
  async (followeeId,{ rejectWithValue }) => {
    try {
      
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/post/follow-unfollow-following`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 'follwee_id': followeeId})
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      // console.log("=====data===in followUnfollowOnFollowing===>", data);
      return data;
    } catch (error) {
      console.log("error in followUnfollowOnFollowing call thunk", error.message)
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
      // Handle likeAnyComment
      .addCase(likeAnyComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(likeAnyComment.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(likeAnyComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle commentOnReply
      .addCase(commentOnReply.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(commentOnReply.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(commentOnReply.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle commitPost
      .addCase(commitPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(commitPost.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(commitPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle deleteCommentByPostOwner
      .addCase(deleteCommentByPostOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCommentByPostOwner.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteCommentByPostOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle deleteReplyByPostOwner
      .addCase(deleteReplyByPostOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReplyByPostOwner.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteReplyByPostOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle followUnfollow
      .addCase(followUnfollow.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(followUnfollow.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(followUnfollow.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle followUnfollow
      .addCase(followUnfollowOnFollowing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(followUnfollowOnFollowing.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(followUnfollowOnFollowing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle SharePostWithFriends
      .addCase(SharePostWithFriends.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SharePostWithFriends.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(SharePostWithFriends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { resetPostsState } = postSlice.actions;
export default postSlice.reducer;
