# Task 2: String Character Frequency

## Problem

Count character occurrences in a string and output them in order of first appearance.

**Example:** `"hello world"` → `h:1, e:1, l:3, o:2, w:1, r:1, d:1`

## Approach

Uses a JavaScript `Map` to count characters in a single pass. `Map` preserves insertion order by spec, so the output naturally reflects first-appearance order.

## Assumptions

- Case-sensitive (`A` ≠ `a`) — no instruction to normalize
- Whitespace excluded — consistent with the provided example
- Special characters and digits counted normally
- Empty input → empty output

## Run

```bash
npx tsx task2/char-frequency.ts "hello world"
npx tsx task2/char-frequency.test.ts
```
