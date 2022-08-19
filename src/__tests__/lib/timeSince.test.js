import { timeSince } from '../../lib';

describe('timeSince lib function', () => {
  test('Functionality with correct timestamp', () => {
    expect(timeSince(1521947761000).includes('ys')).toBe(true);
  });

  test('Fails with a future date.', () => {
    expect(() => {
      timeSince(Date.now() + 1000);
    }).toThrow(RangeError());
  });

  test('Return seconds for an inmediate Date', () => {
    expect(timeSince(Date.now()).includes('sec')).toBe(true);
  });
});
