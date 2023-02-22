import operate from '../logic/operate';

describe('make operations', () => {
  test('adding 2 to 2', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('multiplying 2 with 2', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('dividing 6 by 2', () => {
    expect(operate(6, 2, '÷')).toEqual('3');
  });
  test('substracting 10 to 2', () => {
    expect(operate(10, 2, '-')).toEqual('8');
  });
});
