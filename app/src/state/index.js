import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  products: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      // state.token = action.payload.token;
    },
    setGithubLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.githubtoken = action.payload.githubtoken;
      state.preferences = action.payload.preferences;
    },
    setVercelStatus: (state, action) => {
      state.verceltoken = action.payload.verceltoken;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.githubtoken = null;
      state.preferences = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload.product);
    },
    addProducts: (state, action) => {
      state.products.push(...action.payload.products);
    },
  },
});

export const {
  setMode,
  setLogin,
  setGithubLogin,
  setLogout,
  setFriends,
  setPosts,
  setPost,
  setVercelStatus,
  setProducts,
  addProduct,
  addProducts,
} = authSlice.actions;
export default authSlice.reducer;
