import packageJson from '../../../package.json' assert { type: 'json' };

export function describeVersion(): string {
  const name = packageJson.name;
  return `TypeScript 5.3.3 — import attributes (TS 5.3 feature) for ${name}`;
}
