import { render, screen, fireEvent } from '@testing-library/react';
import { Follow } from '../view/components';
import { users } from '../services/data';

describe('Follow Component', () => {
  const firstUsers = users.slice(0, 5);
  const clickMessage = 'click button work Follow Component';
  let clickCounter = 0;

  beforeEach(() => {
    render(
      <Follow
        config={{
          users: firstUsers,
          button: {
            text: 'FollowPotatoe',
            color: 'info',
            onClick: () => {
              console.warn(`${clickMessage}-${clickCounter}`);
              clickCounter++;
            },
          },
        }}
      />
    );
  });

  test.each(firstUsers)('Passed users should be visible', (user) => {
    const IsName = screen.queryByText(user.username);
    const isDescription = screen.queryByText(user.description);

    expect(IsName).not.toBe(null);
    expect(isDescription).not.toBe(null);
  });

  test('All Users have their respective follow button with config given text', () => {
    const buttons = screen.getAllByRole('button', { name: 'FollowPotatoe' });

    expect(buttons.length).toBe(firstUsers.length);
  });

  test('Button display and functionality is the expected on all users', () => {
    const buttons = screen.getAllByRole('button', { name: 'FollowPotatoe' });
    const BgColor = '#0288d1';

    buttons.forEach((button, index) => {
      const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();
      fireEvent.click(button);

      expect(button).toHaveStyle({ backgroundColor: BgColor });
      expect(console.warn).toHaveBeenLastCalledWith(`${clickMessage}-${index}`);

      consoleWarnMock.mockClear();
    });
  });
});
