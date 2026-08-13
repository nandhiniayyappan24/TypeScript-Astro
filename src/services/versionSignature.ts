export function firstNumber(values: number[]): number | undefined {
  return values.values().next().value;
}

export function describeVersion(): string {
  return 'TypeScript 5.6.3 — iterator helper methods (TS 5.6 feature)';
}
