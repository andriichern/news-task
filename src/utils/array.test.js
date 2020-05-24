import { describe } from 'riteway';
import { unwrapFirst, map, concat } from './array';

describe('unwrapFirst method', async assert => {
  const SHOULD_MSG = 'return first element';

  assert({
    given: 'an empty array',
    should: 'return null',
    actual: unwrapFirst([]),
    expected: null,
  });

  assert({
    given: 'an array of numbers',
    should: SHOULD_MSG,
    actual: unwrapFirst([1, 2, 3]),
    expected: 1,
  });

  assert({
    given: 'an array of objects',
    should: SHOULD_MSG,
    actual: unwrapFirst([{ id: 1 }, { id: 2 }, { id: 3 }]),
    expected: { id: 1 },
  });

  assert({
    given: 'an array of arrays',
    should: SHOULD_MSG,
    actual: unwrapFirst([[0], [1], [2]]),
    expected: [0],
  });
});

describe('map method', async assert => {
  assert({
    given: 'an empty array',
    should: 'return empty array',
    actual: map(x => x)([]),
    expected: [],
  });

  assert({
    given: 'an identity mapper & array of numbers',
    should: 'return the same array',
    actual: map(x => x)([1, 2, 3]),
    expected: [1, 2, 3],
  });

  assert({
    given: 'a multuplier & an array of numbers',
    should: 'multuply all numbers',
    actual: map(x => x * 2)([1, 2, 3]),
    expected: [2, 4, 6],
  });

  assert({
    given: 'a boolean converter & an array of numbers',
    should: 'return array of booleans',
    actual: map(x => x % 2 === 0)([1, 2, 3, 4, 5]),
    expected: [false, true, false, true, false],
  });
});

describe('concat method', async assert => {
  assert({
    given: 'an empty array',
    should: '',
    actual: concat([])([]),
    expected: [],
  });

  assert({
    given: 'two non empty arrays',
    should: 'concat two arrays',
    actual: concat([1, 2, 3])([4, 5, 6]),
    expected: [1, 2, 3, 4, 5, 6],
  });
});
