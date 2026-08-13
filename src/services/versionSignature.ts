export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function describeVersion(): string {
  return 'TypeScript 5.5.4 — inferred type predicates (TS 5.5 feature)';
}
