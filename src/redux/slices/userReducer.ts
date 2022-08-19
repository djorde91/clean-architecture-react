import { Post, User, ActiveUser } from '../../domain';
import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ActiveUser = {
  data: {
    alias: 'Me',
    username: 'Me',
    description: '',
    interests: [],
  },
  posts: [],
  followed: [],
  followedChosen: false,
};

const userSlice: Slice = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>): void => {
      state.posts = [...state.posts, action.payload];
    },
    followUser: (state, action: PayloadAction<User['username']>): void => {
      state.followed = [...state.followed, action.payload];
    },
    unfollowUser: (state, action: PayloadAction<User['username']>): void => {
      state.followed = state.followed.filter(
        (user: string) => user !== action.payload
      );
    },
    updateFollowedChosen: (
      state,
      action: PayloadAction<ActiveUser['followedChosen']>
    ): void => {
      state.followedChosen = action.payload;
    },
  },
});
export const { addPost, followUser, unfollowUser, updateFollowedChosen } =
  userSlice.actions;
export default userSlice.reducer;
