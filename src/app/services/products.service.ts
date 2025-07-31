import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Макарун с малиной', price: 1.70, image: 'images/1.png' },
    { id: 2, name: 'Макарун с манго', price: 1.70, image: 'images/2.png' },
    { id: 3, name: 'Пирог с ванилью', price: 1.70, image: 'images/3.png' },
    { id: 4, name: 'Пирог с фисташками', price: 1.70, image: 'images/4.png' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
