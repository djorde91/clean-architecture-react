import { Post, ActiveUser, User } from '../../domain';
import { posts } from '../../services/data';
import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activePosts: [],
};

const timelineSlice: Slice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    getPostsFromActiveAndFollowedUsers: (
      state,
      action: PayloadAction<ActiveUser>
    ): void => {
      const activeUser = action.payload;
      let timelinePosts = [];

      const postsFromActiveAndFollowedUsers = function (): Array<Post> {
        timelinePosts = posts.filter((post) => {
          return activeUser.followed.includes(post.user.username);
        });
        timelinePosts = [...activeUser.posts, ...timelinePosts];

        return timelinePosts;
      };

      state.activePosts = postsFromActiveAndFollowedUsers();
    },
    getPostsFromSpecificUser: (
      state,
      action: PayloadAction<User['username']>
    ): void => {
      const username = action.payload;

      const postsFromUser: Array<Post> = posts.filter((post: Post) => {
        return post.user.username === username;
      });

      state.activePosts = postsFromUser;
    },
  },
});
export const { getPostsFromSpecificUser, getPostsFromActiveAndFollowedUsers } =
  timelineSlice.actions;
export default timelineSlice.reducer;
