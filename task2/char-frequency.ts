/**
 * Counts character occurrences in a string, output in order of first appearance.
 * Uses a Map (preserves insertion order) for single-pass counting.
 * Whitespace is excluded; case-sensitive; special chars and digits counted.
 */

export function charFrequency(input: string): string {
  const counts = new Map<string, number>();

  for (const char of input) {
    if (/\s/.test(char)) continue;
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([char, count]) => `${char}:${count}`)
    .join(', ');
}

if (require.main === module) {
  const input = process.argv[2] ?? 'hello world';
  console.log(`Input:  "${input}"`);
  console.log(`Output: ${charFrequency(input)}`);
}
