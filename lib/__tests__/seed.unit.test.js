const rates = require('../rates.json');

test('Each item in rates should include province, tax and value properties', () =>
  expect(
    rates.every(
      (rate) =>
        rate.province.length &&
        rate.value > 0 &&
        ['GST', 'PST', 'HST', 'QST'].includes(rate.tax),
    ),
  ).toBeTruthy());

test('Rates should include all 13 provinces/territories', () =>
  expect(
    rates.reduce(
      (curr, next) =>
        curr.includes(next.province)
          ? curr
          : curr.concat(next.province),
      [],
    ),
  ).toHaveLength(13));
