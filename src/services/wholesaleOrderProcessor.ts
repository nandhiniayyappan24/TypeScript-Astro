import { calculateTotal } from './orderService.js';

export function processWholesaleOrder(quantity: number, unitPrice: number, discount: number): number {
  return calculateTotal(quantity, unitPrice, discount);
}
