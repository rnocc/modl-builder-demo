import { Component } from '@angular/core';
import { PropertyFilters, Product, CommonValue } from './types';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm?: string;
  title = 'modl-builder-demo';
  viewTiles = false;
  products: Product[];
  propertyFilters: PropertyFilters;
  commonValues: CommonValue[];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.products;
    this.propertyFilters = this.productsService.propertyFilters;
    this.commonValues = this.productsService.getCommonValues();
  }

  displayList() {
    return this.productsService.displayList(this.searchTerm);
  }

  filter(type: string, value: any) {
    this.propertyFilters[type] = value;
  }
}
