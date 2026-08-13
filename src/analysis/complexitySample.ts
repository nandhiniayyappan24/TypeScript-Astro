export function complexDecision(value: number): string {
  if (value > 100) return 'high';
  if (value > 80) return 'medium-high';
  if (value > 60) return 'medium';
  if (value > 40) return 'medium-low';
  if (value > 20) return 'low';
  if (value > 10) return 'very-low';
  if (value > 5) return 'tiny';
  if (value > 0) return 'minimal';
  return 'zero';
}
