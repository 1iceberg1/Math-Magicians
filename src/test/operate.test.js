import operate from '../logic/operate';

describe('make operations', () => {
  test('adding 2 to 2', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('adding 2 to 2', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('adding 2 to 2', () => {
    expect(operate(3, 2, '%')).toEqual('1');
  });
  test('adding 2 to 2', () => {
    expect(operate(10, 2, '-')).toEqual('8');
  });
});
