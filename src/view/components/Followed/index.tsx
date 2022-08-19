import { User } from '../../../domain';
import { Button, ButtonTypeMap, List, ListItem } from '@mui/material/';
import { useFollowers } from '../../../application';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    active?: boolean;
  }
}
type propsType = {
  config: {
    users: Array<User>;
    onUserClick: (config: any) => void;
    button: {
      text: string;
      color: ButtonTypeMap['props']['color'];
      onClick: (username: string) => void;
    };
  };
};

function Followed(props: propsType) {
  const { config } = props;
  const chosenUserStyle = 'bg-slate-500';
  const { getChoosedUser, chooseFollowedUser } = useFollowers();

  /**
   * This function is used to update the currently selected user on the following list.
   * If that user is the same as before (previous state of global state activeUser.followedChosen ) we disable the selection.
   *
   * I could have used a usePrevious hook https://usehooks.com/usePrevious/ and local state as a different approach.
   * But activeUser.followedChosen is used as a shared state on different parts of the application.
   *
   */
  const handleChosen = (username: string): void => {
    chooseFollowedUser(username);

    if (!isChosen(username)) chooseFollowedUser(false);
  };

  const isChosen = (username: string): boolean => username !== getChoosedUser();

  const printUsers = config.users.map((user) => {
    const { username } = user;

    return (
      <ListItem
        alignItems={'flex-start'}
        disablePadding
        className={'flex-col border-b-2 last:border-b-0'}
        key={username}
      >
        <div className="my-3 w-full">
          <div
            onClick={(e) => {
              handleChosen(username);
              config.onUserClick({
                event: e,
                username: username,
                isChosen: isChosen(username),
              });
            }}
            className={
              'transition-colors border-2 py-1 cursor-pointer text-center' +
              (!isChosen(username) ? ` ${chosenUserStyle} ` : ' bg-slate-300 ')
            }
          >
            <b data-cy="followedUsername">{username}</b>
          </div>
          <p className="text-sm italic line-clamp-2">{user.description}</p>
          <Button
            color={config.button.color}
            className="w-full"
            variant="contained"
            onClick={(e) => {
              config.button.onClick(username);
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
      data-testid="followedList"
      data-cy="followedList"
      disablePadding
      className="max-h-[500px] overflow-auto"
    >
      {printUsers}
    </List>
  );
}

export default Followed;
