/**
 * Returns time passed since specific timestamp argument.
 * @param {number} dateTimestamp
 * @returns {string}
 */
function timeSince(dateTimestamp: number): string {
  if (Date.now() < dateTimestamp) throw new RangeError();

  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const WEEK = DAY * 7;
  const MONTH = DAY * 30;
  const YEAR = DAY * 365;
  const secondsAgo = Math.round((Date.now() - Number(dateTimestamp)) / 1000);

  if (secondsAgo < MINUTE) {
    return secondsAgo + `sec${secondsAgo !== 1 ? 's' : ''}`;
  }

  let divisor;
  let unit = '';

  if (secondsAgo < HOUR) {
    [divisor, unit] = [MINUTE, 'min'];
  } else if (secondsAgo < DAY) {
    [divisor, unit] = [HOUR, 'h'];
  } else if (secondsAgo < WEEK) {
    [divisor, unit] = [DAY, 'd'];
  } else if (secondsAgo < MONTH) {
    [divisor, unit] = [WEEK, 'w'];
  } else if (secondsAgo < YEAR) {
    [divisor, unit] = [MONTH, 'mth'];
  } else {
    [divisor, unit] = [YEAR, 'y'];
  }

  const count = Math.floor(secondsAgo / divisor);

  return `${count}${unit}${count > 1 ? 's' : ''}`;
}

export default timeSince;
