import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private products = signal<Product[]>([
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
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 79.99,
      description: 'Portable Bluetooth speaker with long battery life',
      image: 'https://placehold.co/200x200?text=Speaker'
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: 49.99,
      description: 'High-performance gaming mouse with RGB lighting',
      image: 'https://placehold.co/200x200?text=Gaming+Mouse'
    },
    {
      id: 5,
      name: 'External Hard Drive',
      price: 89.99,
      description: '2TB external hard drive with USB 3.0',
      image: 'https://placehold.co/200x200?text=Hard+Drive'
    }
  ]);

  getProducts(): Product[] {
    return this.products();
  }

  getProductById(id: number): Product | undefined {
    return this.products().find(product => product.id === id);
  }
}
