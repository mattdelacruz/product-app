import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Subscribes to route parameter changes to get the 'id' from the URL.
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));
      // Calls the product service to fetch the product by ID and assigns it to the 'product' property.
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    });
  }
}
