export function formatStatus<T extends 'ok' | 'error'>(status: T): T extends 'ok' ? string : Error {
  if (status === 'ok') {
    return 'healthy' as T extends 'ok' ? string : Error;
  }
  return new Error('failed') as T extends 'ok' ? string : Error;
}

export function describeVersion(): string {
  return 'TypeScript 5.8.3 — granular conditional return types (TS 5.8 feature)';
}
