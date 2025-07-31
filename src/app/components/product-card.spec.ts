import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;
  let mockCartService: jasmine.SpyObj<CartService>;

  beforeEach(async () => {
    mockCartService = jasmine.createSpyObj('CartService', ['addToCart']);

    await TestBed.configureTestingModule({
      imports: [ProductCard, CurrencyPipe],
      providers: [
        { provide: CartService, useValue: mockCartService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;

    // Mock product input
    component.product = {
      id: 1,
      name: 'Test Product',
      price: 1.70,
      image: 'test.png'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addToCart when button clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(mockCartService.addToCart).toHaveBeenCalledWith(component.product);
  });

  it('should emit event when product added to cart', () => {
    spyOn(component.addedToCart, 'emit');
    component.addToCart();
    expect(component.addedToCart.emit).toHaveBeenCalledWith(component.product.name);
  });
});
