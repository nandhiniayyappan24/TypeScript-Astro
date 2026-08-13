export function calculateTotal(quantity: number, unitPrice: number, discount: number): number {
  return quantity * unitPrice - discount;
}

export function isEligibleForFreeShipping(total: number): boolean {
  return total >= 50;
}
