import { FollowersContainer, PostsContainer } from '../';
import { Grid } from '@mui/material';

function TwitterContainer() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: { sm: '95%' }, margin: { sm: 'auto' } }}
    >
      <Grid className="w-full" item sm={12} md={8}>
        <PostsContainer />
      </Grid>
      <Grid item sm={12} md={4} className="md:order-first">
        <FollowersContainer />
      </Grid>
    </Grid>
  );
}

export default TwitterContainer;
