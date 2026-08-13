export function createArray<T>(length: number, value: T): T[] {
  return Array.from({ length }, () => value);
}

export function describeVersion(): string {
  return 'TypeScript 5.7.3 — never inference in generic functions (TS 5.7 feature)';
}
