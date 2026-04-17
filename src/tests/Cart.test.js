import { describe, it, expect } from 'vitest';
import { calculateTotal, addItem, removeItem } from '../utils/cartLogic';

describe('Cart Logic', () => {
  const mockProduct = { id: 1, name: 'Test Product', price: '₹1,000' };

  it('should add an item to an empty cart', () => {
    const cart = [];
    const newCart = addItem(cart, mockProduct);
    expect(newCart).toHaveLength(1);
    expect(newCart[0].quantity).toBe(1);
  });

  it('should increment quantity if item already exists', () => {
    const cart = [{ id: 1, name: 'Test Product', price: '₹1,000', quantity: 1 }];
    const newCart = addItem(cart, mockProduct);
    expect(newCart).toHaveLength(1);
    expect(newCart[0].quantity).toBe(2);
  });

  it('should remove an item from the cart', () => {
    const cart = [{ id: 1, name: 'Test Product', price: '₹1,000', quantity: 1 }];
    const newCart = removeItem(cart, 1);
    expect(newCart).toHaveLength(0);
  });

  it('should calculate total correctly', () => {
    const cart = [
      { id: 1, price: '₹1,000', quantity: 2 },
      { id: 2, price: '₹500', quantity: 1 }
    ];
    expect(calculateTotal(cart)).toBe(2500);
  });
});
