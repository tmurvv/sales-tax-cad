const rates = require('./rates');
const { fromPercentage } = require('./utils');

module.exports = class SalesTaxFinder {
  constructor(twoLetterProvinceCode, num = 0) {
    this.taxable = num;
    this.$data = rates.filter(
      (rate) => rate.province === twoLetterProvinceCode,
    );
  }

  getAll() {
    return this.$data.map((rate) => ({
      ...rate,
      charge: fromPercentage(this.taxable, rate.value),
    }));
  }

  getSum() {
    return 0;
  }
};
