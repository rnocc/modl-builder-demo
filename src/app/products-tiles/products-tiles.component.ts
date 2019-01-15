import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../types';

@Component({
  selector: 'app-products-tiles',
  templateUrl: './products-tiles.component.html',
  styleUrls: ['./products-tiles.component.css']
})
export class ProductsTilesComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
