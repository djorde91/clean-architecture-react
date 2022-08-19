import { User, ActiveUser } from '../domain';
import { users } from '../services/data';
import { useDispatch, useSelector } from 'react-redux';
import {
  followUser,
  unfollowUser,
  updateFollowedChosen,
} from '../redux/slices/userReducer';
import type { RootState } from '../redux/store';

export function useFollowers() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state: RootState) => state.activeUser);

  function follow(username: User['username']): void {
    dispatch(followUser(username));
    chooseFollowedUser(false);
  }

  function unfollow(username: User['username']): void {
    dispatch(unfollowUser(username));
    chooseFollowedUser(false);
  }

  function getChoosedUser(): ActiveUser['followedChosen'] {
    return activeUser.followedChosen;
  }

  function chooseFollowedUser(chosen: ActiveUser['followedChosen']): void {
    dispatch(updateFollowedChosen(chosen));
  }

  function getUsersToFollow(): Array<User> {
    return users.filter((user: User) => {
      return !activeUser.followed.includes(user.username);
    });
  }

  function getFollowedUsers(): Array<User> {
    return users.filter((user) => {
      return activeUser.followed.includes(user.username);
    });
  }

  return {
    getUsersToFollow,
    getFollowedUsers,
    follow,
    unfollow,
    chooseFollowedUser,
    getChoosedUser,
  };
}
