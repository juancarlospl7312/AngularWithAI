import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = signal<Product[]>([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 199.99,
      description: 'Premium wireless headphones with noise cancellation',
      image: 'https://placehold.co/200x200?text=Headphones'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 149.99,
      description: 'Feature-rich smart watch with health tracking',
      image: 'https://placehold.co/200x200?text=Smart+Watch'
    },
  ]);

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
