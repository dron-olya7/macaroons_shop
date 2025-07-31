import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products list', () => {
    const products = service.getProducts();
    expect(products.length).toBe(4);
    expect(products[0].name).toBe('Макарун с малиной');
  });

  it('should find product by id', () => {
    const product = service.getProductById(2);
    expect(product?.name).toBe('Макарун с манго');
  });

  it('should return undefined for non-existent id', () => {
    const product = service.getProductById(99);
    expect(product).toBeUndefined();
  });
});
