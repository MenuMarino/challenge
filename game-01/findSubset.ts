export function findSubsetWithSum(M: number[], N: number): number[] | null {
  if (!Array.isArray(M) || typeof N !== 'number') {
    throw new Error(
      'Invalid input: M must be an array and N must be a number.'
    );
  }

  const seen = new Set<number>();

  for (const num of M) {
    const complement = N - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }

  return null;
}
