export type Flatten<T> = T extends Array<infer U> ? U : T;

export function describeVersion(): string {
  return 'TypeScript 5.1.6 — improved infer extends (TS 5.1 feature)';
}
