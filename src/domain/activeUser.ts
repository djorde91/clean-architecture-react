import { Post, User } from './';

export interface ActiveUser {
  data: User;
  posts: Array<Post>;
  followed: Array<string>;
  followedChosen: false | string;
}
