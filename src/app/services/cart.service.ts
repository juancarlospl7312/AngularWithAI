import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = signal<Product[]>([]);

  addToCart(product: Product): void {
    const currentItems = this.items();
    const existingItemIndex = currentItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      currentItems[existingItemIndex].quantity = (currentItems[existingItemIndex].quantity || 1) + 1;
    } else {
      currentItems.push({ ...product, quantity: 1 });
    }
    this.items.set(currentItems);
  }

  removeFromCart(productId: number): void {
    const currentItems = this.items();
    const updatedItems = currentItems.filter(item => item.id !== productId);
    this.items.set(updatedItems);
  }

  clearCart(): void {
    this.items.set([]);
  }

  getItems(): Product[] {
    return this.items();
  }

  getTotalPrice(): number {
    return this.items().reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  }
}
