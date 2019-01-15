import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../types';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  @Input() products: Product[];
  displayedColumns = ['product', 'baseDesc', 'itemType', 'subtype'];

  constructor() { }

  ngOnInit() {
  }

}
