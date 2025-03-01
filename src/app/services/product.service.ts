import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      name: 'Laptop',
      price: 999.99,
      description: 'A high-performance gaming laptop',
    },
    {
      name: 'Smartphone',
      price: 499.99,
      description: 'A high-quality smartphone with a great camera',
    },
    { name: 'Tablet', price: 299.99, description: 'A tablet for everyday use' },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products[id]);
  }
}
