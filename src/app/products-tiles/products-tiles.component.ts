import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-tiles',
  templateUrl: './products-tiles.component.html',
  styleUrls: ['./products-tiles.component.css']
})
export class ProductsTilesComponent implements OnInit {
  @Input() products: any;

  constructor() { }

  ngOnInit() {
  }

}
