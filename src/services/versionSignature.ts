export type Palette = Record<'primary' | 'secondary', string>;

export const palette = {
  primary: '#0055aa',
  secondary: '#aa5500',
} satisfies Palette;

export function describeVersion(): string {
  return 'TypeScript 4.9.5 — satisfies operator (TS 4.9 feature)';
}
