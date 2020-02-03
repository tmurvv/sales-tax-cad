const BigNumber = require('bignumber.js');
const rates = require('./rates');
const { fromPercentage, isNumber } = require('./utils');

module.exports = class SalesTaxFinder {
  constructor(
    twoLetterProvinceCode,
    totalTaxableValue = 0,
    roundFinalOutput,
  ) {
    this.toFixed = roundFinalOutput;
    this.taxable = totalTaxableValue;

    this.$data = rates.filter(
      (rate) => rate.province === twoLetterProvinceCode,
    );

    if (!this.$data.length)
      throw new Error('Unknown province code');
  }

  /**
   * @NOTE
   * Really, this is meant to remain an internal method.
   */
  __round(v) {
    const { taxable, toFixed } = this;
    const num = fromPercentage(taxable, v);

    return isNumber(toFixed)
      ? new BigNumber(num).decimalPlaces(toFixed).toNumber()
      : num;
  }

  get() {
    return this.$data.map((rate) => ({
      chargeable: this.__round(rate.value),
      ...rate,
    }));
  }

  sum() {
    return this.$data.reduce((curr, rate) => {
      let num = curr;
      num += this.__round(rate.value);
      return num;
    }, 0);
  }
};
