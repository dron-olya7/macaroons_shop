export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Опциональное поле
  image?: string;
}
