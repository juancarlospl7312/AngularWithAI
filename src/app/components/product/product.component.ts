import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductListService } from '../../services/product-list.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class ProductComponent {
  private products = signal<Product[]>([]);
  readonly productsList = computed(() => this.products());

  constructor(
    private cartService: CartService,
    private productListService: ProductListService
  ) {
    this.products.set(this.productListService.getProducts());
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
