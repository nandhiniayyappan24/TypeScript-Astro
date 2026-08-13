export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}

export function describeVersion(): string {
  return 'TypeScript 5.4.5 — NoInfer and improved generics (TS 5.4 feature set)';
}
