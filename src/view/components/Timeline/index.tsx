import { timeSince } from '../../../lib';
import { Post } from '../../../domain';
import { List, ListItem } from '@mui/material/';

type propsType = {
  posts: Array<Post>;
};

function Timeline(props: propsType) {
  const { posts } = props;

  const printedPosts = posts.map((post, index: number) => {
    return (
      <ListItem
        data-cy="timelineItem"
        alignItems={'flex-start'}
        disablePadding
        className={'flex-col mb-2 border-b-2 last:border-b-0'}
        key={index}
      >
        <div className="flex justify-between mb-1 w-full">
          <b data-cy="timelineItemUsername">{post.user.username}</b>
          <b>{timeSince(post.publishDate)}</b>
        </div>
        <p>{post.text}</p>
      </ListItem>
    );
  });

  return (
    <List
      data-testid="timeline"
      data-cy="timeline"
      disablePadding
      className="max-h-[500px] overflow-auto"
    >
      {printedPosts}
    </List>
  );
}

export default Timeline;
