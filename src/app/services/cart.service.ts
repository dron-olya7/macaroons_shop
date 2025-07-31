import { Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product.interface';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  addToCart(product: Product): void {
    const existingItem = this.cartItems().find(item => item.product.id === product.id);
    if (existingItem) {
      this.cartItems.update(items =>
        items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cartItems.update(items => [...items, { product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => items.filter(item => item.product.id !== productId));
  }

  getItems() {
    return this.cartItems();
  }

  getTotalCount() {
    return this.cartItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalSum() {
    return this.cartItems().reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }
}
