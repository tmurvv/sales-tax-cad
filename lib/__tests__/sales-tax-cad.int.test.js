const SalesTax = require('..');

describe('Sales tax integration test', () => {
  it('should return BC tax results', () => {
    const s = new SalesTax('BC', 14.99);
    expect(s.get()).toHaveLength(2);
    expect(s.sum()).toBe(1.7988);
  });

  it('should return ON tax results', () => {
    const s = new SalesTax('ON', 21.41);
    expect(s.get()).toHaveLength(1);
    expect(s.sum()).toBe(2.7833);
  });

  it('should return QC tax results', () => {
    const s = new SalesTax('QC', 9.87);
    expect(s.get()).toHaveLength(2);
    expect(s.sum()).toBe(1.4780325);
  });

  it('should return rounded YK tax results', () => {
    const s = new SalesTax('YK', 105.41, 2);
    expect(s.get()).toHaveLength(1);
    expect(s.sum()).toBe(5.27);
  });
});
