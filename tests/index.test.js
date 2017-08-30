const compose = require('../lib');

describe('Compose', () => {

  it('should be definded', () => {
    expect(typeof compose).toBe('function');
  });

  it('should return function', () => {
    expect(typeof compose(() => {})).toBe('function');
  });

  it('should return composed function', () => {
    const fn1 = (a) => a + a;
    const fn2 = (a) => a * a;
    const composedFn = compose(fn2, fn1);
    expect(composedFn(1)).toEqual(4)
  });

});

