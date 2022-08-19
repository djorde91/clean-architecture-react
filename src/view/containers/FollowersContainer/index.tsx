import { BoxFrame } from '../../helpers';
import { Follow, Followed } from '../../components';
import { Grid, ButtonTypeMap } from '@mui/material';
import { useFollowers, useTimeline } from '../../../application';

function FollowersContainer() {
  const { showPostsFromActiveAndFollowedUsers, showPostsFromSpecificUser } =
    useTimeline();
  const { getUsersToFollow, getFollowedUsers, follow, unfollow } =
    useFollowers();

  const followConfig = {
    users: getUsersToFollow(),
    button: {
      text: 'Follow',
      color: 'info' as ButtonTypeMap['props']['color'],
      onClick: (username: string) => {
        follow(username);
      },
    },
  };

  const followedConfig = {
    users: getFollowedUsers(),
    onUserClick: (event: any) => {
      if (event.isChosen) {
        showPostsFromSpecificUser(event.username);
      } else {
        showPostsFromActiveAndFollowedUsers();
      }
    },
    button: {
      text: 'Unfollow',
      color: 'warning' as ButtonTypeMap['props']['color'],
      onClick: (username: string) => {
        showPostsFromActiveAndFollowedUsers();
        unfollow(username);
      },
    },
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={12}>
        <BoxFrame title="Follow">
          <Follow config={followConfig} />
        </BoxFrame>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <BoxFrame title="Following">
          <Followed config={followedConfig} />
        </BoxFrame>
      </Grid>
    </Grid>
  );
}

export default FollowersContainer;
