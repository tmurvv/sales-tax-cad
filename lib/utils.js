exports.fromPercentage = (v = 0, percentage = 0) => {
  if (Number.isNaN(v) || typeof v !== 'number')
    throw new Error(
      'Can only evaluate sales tax on number values',
    );

  if (percentage > 1)
    throw new Error(
      'Percent must be expressed as a fraction of 1',
    );

  return v * percentage;
};
