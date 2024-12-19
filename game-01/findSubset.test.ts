import { findSubsetWithSum } from './findSubset';

describe('findSubsetWithSum', () => {
  it('should return the first subset that sums to N', () => {
    expect(findSubsetWithSum([2, 5, 8, 14, 0], 10)).toEqual([2, 8]);
  });

  it('should return null if no subset exists', () => {
    expect(findSubsetWithSum([1, 3, 5], 10)).toBeNull();
  });

  it('should handle negative numbers correctly', () => {
    expect(findSubsetWithSum([-3, -2, 7, 5], 2)).toEqual([-3, 5]);
  });

  it('should return null for an empty array', () => {
    expect(findSubsetWithSum([], 10)).toBeNull();
  });

  it('should handle duplicate numbers in the input', () => {
    expect(findSubsetWithSum([5, 5, 5, 5], 10)).toEqual([5, 5]);
  });
});
