const utils = require('../utils');

describe('Utility functions', () => {
  describe('"fromPercentage"', () => {
    it('should return 0 by default', () =>
      expect(utils.fromPercentage(100)).toBe(0));

    it('should throw an exception with non-number parameters', () =>
      expect(() =>
        utils.fromPercentage('100'),
      ).toThrowError());

    it('should throw an exception with a percent value above 1', () =>
      expect(() =>
        utils.fromPercentage(1, 2),
      ).toThrowError());

    it('should return whole numbers', () =>
      expect(utils.fromPercentage(100, 0.15)).toBe(15));

    it('should return floating points', () =>
      expect(utils.fromPercentage(14.53, 0.0998)).toBe(
        1.450094,
      ));
  });
});
