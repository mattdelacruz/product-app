import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.models';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  viewProduct(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
