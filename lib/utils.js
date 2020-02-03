const BigNumber = require('bignumber.js');

const isNumber = (v) =>
  !Number.isNaN(v) && typeof v === 'number';

exports.isNumber = isNumber;

exports.fromPercentage = (v = 0, percentage = 0) => {
  if (!isNumber(v))
    throw new Error(
      'Can only evaluate sales tax on number values',
    );

  if (percentage > 1)
    throw new Error(
      'Percent must be expressed as a fraction of 1',
    );

  return new BigNumber(v)
    .multipliedBy(percentage)
    .toNumber();
};
