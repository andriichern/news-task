import { describe } from 'riteway';
import { pipe } from './fn';

describe('pipe', async assert => {
  assert({
    given: 'sum function',
    should: 'sum input value',
    actual: pipe(x => x + 1)(2),
    expected: 3,
  });

  assert({
    given: 'sum & multiply functions',
    should: 'return correct result',
    actual: pipe(
      x => x + 1,
      x => x * 2
    )(2),
    expected: 6,
  });

  assert({
    given: 'multiply & sum functions',
    should: 'return correct result',
    actual: pipe(
      x => x * 2,
      x => x + 1
    )(2),
    expected: 5,
  });
});
