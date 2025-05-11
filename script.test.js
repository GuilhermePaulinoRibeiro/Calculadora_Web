const { somar, subtrair, multiplicar, dividir } = require('./script/script');

test('somar', () => {
  expect(somar(2, 3)).toBe(5);
  expect(somar(-5, 5)).toBe(0);
  expect(somar(0, 0)).toBe(0);
  expect(somar(1.5, 2.5)).toBe(4);
});

test('subtrair', () => {
  expect(subtrair(5, 2)).toBe(3);
  expect(subtrair(2, 5)).toBe(-3);
  expect(subtrair(0, 0)).toBe(0);
  expect(subtrair(10, -5)).toBe(15);
});

test('multiplicar', () => {
  expect(multiplicar(3, 4)).toBe(12);
  expect(multiplicar(-2, 5)).toBe(-10);
  expect(multiplicar(0, 100)).toBe(0);
  expect(multiplicar(2.5, 2)).toBe(5);
});

test('dividir', () => {
  expect(dividir(10, 2)).toBe(5);
  expect(dividir(9, 3)).toBe(3);
  expect(() => dividir(5, 0)).toThrow("Divisão por zero");
  expect(dividir(-8, 2)).toBe(-4);
  expect(dividir(7, 2)).toBe(3.5);
});
