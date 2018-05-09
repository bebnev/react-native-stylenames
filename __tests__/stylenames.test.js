import stylenames from '../index';

describe('stylenames', () => {
  test('should return array with two numbers', () => {
    expect(stylenames(1, 2)).toEqual([1, 2]);
  });

  test('should filter all falsy values', () => {
    expect(stylenames(1, 2, null, false, undefined, null)).toEqual([1, 2]);
  });

  test('should concat only truthy conditionals', () => {
    expect(stylenames(1, 2, { 3: true, 4: false })).toEqual([1, 2, 3]);
  });

  test('should concat only truthy conditionals and plain styles', () => {
    expect(stylenames(1, 2, { 3: true, 4: false, fontSize: 'bold' }))
      .toEqual([1, 2, 3, { fontSize: 'bold' }]);
  });

  test('should manage only plain object', () => {
    expect(stylenames(1, 2, { 3: true }, new Number(1), new Object({fontSize: 25}))) // eslint-disable-line
      .toEqual([1, 2, 3, { fontSize: 25 }]);
  });

  test('should concat plain styles', () => {
    expect(stylenames(1, 2, { fontSize: 'bold', backgroundColor: 'red', flex: 0 }))
      .toEqual(
        [1, 2, { fontSize: 'bold' }, { backgroundColor: 'red' }, { flex: 0 }],
      );
  });

  test('should recursively concat styles', () => {
    expect(stylenames(1, 2, [3, 4, { 5: true, 6: false }, [{ 7: true }]]))
      .toEqual([1, 2, 3, 4, 5, 7]);
  });
});
