import { Post, User } from '../domain';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getPostsFromActiveAndFollowedUsers,
  getPostsFromSpecificUser,
} from '../redux/slices/timelineReducer';
import { RootState } from '../redux/store';

export function useTimeline() {
  const dispatch = useDispatch();
  const timeline = useSelector((state: RootState) => state.timeline);
  const activeUser = useSelector((state: RootState) => state.activeUser);

  function showPostsFromActiveAndFollowedUsers(): void {
    dispatch(getPostsFromActiveAndFollowedUsers(activeUser));
  }

  function showPostsFromSpecificUser(username: User['username']): void {
    dispatch(getPostsFromSpecificUser(username));
  }

  function watchActiveUserPosts(): void {
    useEffect(() => {
      showPostsFromActiveAndFollowedUsers();
    }, [activeUser.posts]);
  }

  function watchFollowedAndActiveUserPosts(): void {
    useEffect(() => {
      showPostsFromActiveAndFollowedUsers();
    }, [activeUser.followed]);
  }

  function getActivePosts(): Array<Post> {
    return timeline.activePosts;
  }

  return {
    watchActiveUserPosts,
    watchFollowedAndActiveUserPosts,
    showPostsFromActiveAndFollowedUsers,
    showPostsFromSpecificUser,
    getActivePosts,
  };
}
