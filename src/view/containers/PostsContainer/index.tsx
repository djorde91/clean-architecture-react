import { BoxFrame } from '../../helpers';
import { Timeline, MessageForm } from '../../components';
import { Grid } from '@mui/material';
import { useTimeline } from '../../../application';

function PostsContainer() {
  const { watchFollowedAndActiveUserPosts, getActivePosts } = useTimeline();

  watchFollowedAndActiveUserPosts();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <BoxFrame title={'Timeline'}>
          <Timeline posts={getActivePosts()} />
        </BoxFrame>
      </Grid>
      <Grid item xs={12}>
        <BoxFrame title={'Post a new Message'}>
          <MessageForm />
        </BoxFrame>
      </Grid>
    </Grid>
  );
}

export default PostsContainer;
