import { User } from '../../../domain';
import { Button, ButtonTypeMap, List, ListItem } from '@mui/material/';
type propsType = {
  config: {
    users: Array<User>;
    button: {
      text: string;
      color: ButtonTypeMap['props']['color'];
      onClick: (username: string) => void;
    };
  };
};

function Follow(props: propsType) {
  const { config } = props;

  const printUsers = config.users.map((user) => {
    return (
      <ListItem
        alignItems={'flex-start'}
        disablePadding
        className={'flex-col border-b-2 last:border-b-0'}
        key={user.username}
      >
        <div className="my-3 w-full">
          <b data-cy="followUsername">{user.username}</b>
          <p className="text-sm italic line-clamp-2">{user.description}</p>
          <Button
            color={config.button.color}
            className="w-full"
            variant="contained"
            onClick={() => {
              config.button.onClick(user.username);
            }}
          >
            {config.button.text}
          </Button>
        </div>
      </ListItem>
    );
  });

  return (
    <List
      data-testid="followList"
      data-cy="followList"
      disablePadding
      className="max-h-[500px] overflow-auto"
    >
      {printUsers}
    </List>
  );
}

export default Follow;
