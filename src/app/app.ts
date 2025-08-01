import { Component, signal, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { PhonePipe } from './pipes/phone.pipe';
import { ProductsService } from './services/products.service';
import { AdvantagesComponent } from './components/advantages.component';
import { ProductCard } from './components/product-card';
import { TruncatePipe } from './pipes/truncate-pipe';
import { Product } from './interfaces/product.interface';
import { PhoneInputDirective } from './directives/phone-input.directive';
import { Button } from './directives/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PhonePipe,
    AdvantagesComponent,
    ProductCard,
    TruncatePipe,
    PhoneInputDirective,
    Button
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('macaroons-shop');
  isMenuOpen = signal(false);
  isCartOpen = signal(false);
  phoneNumber = '375293689868';
  userPhone = ''; // Для хранения введенного телефона
  products: Product[] = [];

  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('burger') burgerRef!: ElementRef;

  constructor(
    public cartService: CartService,
    private productsService: ProductsService
  ) {
    this.products = this.productsService.getProducts();
  }

  toggleMenu(): void {
    this.isMenuOpen.update(prev => !prev);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleCart(): void {
    this.isCartOpen.update(prev => !prev); // Теперь корзина открывается/закрывается
  }

  scrollTo(sectionId: string): void {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  onProductAdded(productName: string) {
    alert(`${productName} добавлен в корзину!`);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (this.menuRef && this.burgerRef) {
      const clickedInsideMenu = this.menuRef.nativeElement.contains(event.target);
      const clickedBurger = this.burgerRef.nativeElement.contains(event.target);

      if (!clickedInsideMenu && !clickedBurger) {
        this.closeMenu();
      }
    }
  }
}
