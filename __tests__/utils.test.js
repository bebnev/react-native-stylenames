import { isPlainObject } from '../utils';

describe('Plain object tests', () => {
  test('should check for plain object', () => {
    expect(isPlainObject({ 1: 2 })).toBeTruthy();
    expect(isPlainObject([1, 2])).toBeFalsy();
    expect(isPlainObject(1)).toBeFalsy();
    expect(isPlainObject(new String('foo'))).toBeFalsy(); // eslint-disable-line
  });
});
