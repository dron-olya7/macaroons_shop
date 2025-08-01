import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Product } from '../interfaces/product.interface';
import { Button } from '../directives/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, Button],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCard {
  @Input() product!: Product;
  @Output() addedToCart = new EventEmitter<string>();

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.product);
    this.addedToCart.emit(this.product.name); // Отправляем название товара
  }
}
