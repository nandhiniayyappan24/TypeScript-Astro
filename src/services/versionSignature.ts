export function identity<const T>(value: T): T {
  return value;
}

export function describeVersion(): string {
  return 'TypeScript 5.0.4 — const type parameters (TS 5.0 feature)';
}
