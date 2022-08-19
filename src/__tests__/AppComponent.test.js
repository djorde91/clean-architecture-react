import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  const componentsID = ['followList', 'followedList', 'submitPost', 'timeline'];
  let container;

  beforeEach(() => {
    ({ container } = render(<App />));
  });

  test.each(componentsID)(
    'App component is rendered with all essential components',
    (id) => {
      const component = screen.getByTestId(id);

      expect(component).not.toBe(null);
    }
  );

  test('Toastify is present', () => {
    const toastify = container.getElementsByClassName('Toastify');
    expect(toastify.length).toBe(1);
  });
});
