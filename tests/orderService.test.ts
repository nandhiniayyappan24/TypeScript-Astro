import { describe, expect, it } from 'vitest';
import { calculateTotal, isEligibleForFreeShipping } from '../src/services/orderService.js';

describe('orderService', () => {
  it('applies discount', () => {
    expect(calculateTotal(2, 100, 10)).toBe(190);
  });

  it('uses shipping threshold', () => {
    expect(isEligibleForFreeShipping(49)).toBe(false);
    expect(isEligibleForFreeShipping(50)).toBe(true);
  });
});
