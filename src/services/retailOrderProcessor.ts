import { calculateTotal } from './orderService.js';

export function processRetailOrder(quantity: number, unitPrice: number, discount: number): number {
  return calculateTotal(quantity, unitPrice, discount);
}
