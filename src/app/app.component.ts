import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.models';
import { ProductListComponent } from './components/product-list/product-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
