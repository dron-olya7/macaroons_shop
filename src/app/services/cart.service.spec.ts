import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Product } from '../interfaces/product.interface';

describe('CartService', () => {
  let service: CartService;

  const testProduct1: Product = {
    id: 1,
    name: 'Product 1',
    price: 1.70,
    image: 'path/to/image1.jpg' // Добавляем обязательное свойство
  };

  const testProduct2: Product = {
    id: 2,
    name: 'Product 2',
    price: 1.70,
    image: 'path/to/image2.jpg' // Добавляем обязательное свойство
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product to cart', () => {
    service.addToCart(testProduct1);
    expect(service.getItems().length).toBe(1);
    expect(service.getItems()[0].product.id).toBe(1);
    expect(service.getItems()[0].quantity).toBe(1);
  });

  it('should increment quantity when adding existing product', () => {
    service.addToCart(testProduct1);
    service.addToCart(testProduct1);
    expect(service.getItems().length).toBe(1);
    expect(service.getItems()[0].quantity).toBe(2);
  });

  it('should remove product from cart', () => {
    service.addToCart(testProduct1);
    service.removeFromCart(1);
    expect(service.getItems().length).toBe(0);
  });

  it('should update product quantity', () => {
    service.addToCart(testProduct1);
    service.updateQuantity(1, 5);
    expect(service.getItems()[0].quantity).toBe(5);
  });

  it('should calculate total count', () => {
    service.addToCart(testProduct1);
    service.addToCart(testProduct2);
    service.addToCart(testProduct1);
    expect(service.getTotalCount()).toBe(3);
  });

  it('should calculate total sum', () => {
    service.addToCart(testProduct1); // 1.70
    service.addToCart(testProduct2); // 1.70
    expect(service.getTotalSum()).toBe(3.40); // 1.70 + 1.70
  });

  it('should clear cart', () => {
    service.addToCart(testProduct1);
    service.clearCart();
    expect(service.getItems().length).toBe(0);
  });
});
