import assert from 'node:assert/strict';
import { charFrequency } from './char-frequency';

const tests: { name: string; input: string; expected: string }[] = [
  {
    name: 'example from the task',
    input: 'hello world',
    expected: 'h:1, e:1, l:3, o:2, w:1, r:1, d:1',
  },
  {
    name: 'empty string',
    input: '',
    expected: '',
  },
  {
    name: 'single character',
    input: 'a',
    expected: 'a:1',
  },
  {
    name: 'case sensitivity',
    input: 'AaBb',
    expected: 'A:1, a:1, B:1, b:1',
  },
  {
    name: 'special characters',
    input: 'a!b@c#',
    expected: 'a:1, !:1, b:1, @:1, c:1, #:1',
  },
  {
    name: 'digits',
    input: 'a1b2a1',
    expected: 'a:2, 1:2, b:1, 2:1',
  },
  {
    name: 'unicode characters',
    input: 'café',
    expected: 'c:1, a:1, f:1, é:1',
  },
  {
    name: 'preserves first-appearance order',
    input: 'banana',
    expected: 'b:1, a:3, n:2',
  },
  {
    name: 'mixed with multiple spaces',
    input: 'a b  c',
    expected: 'a:1, b:1, c:1',
  },
];

let passed = 0;
let failed = 0;

for (const t of tests) {
  try {
    const result = charFrequency(t.input);
    assert.equal(result, t.expected, `"${t.input}" → expected "${t.expected}", got "${result}"`);
    console.log(`  ✓ ${t.name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${t.name}: ${(err as Error).message}`);
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
