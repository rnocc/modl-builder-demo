import { Component } from '@angular/core';
import { products } from './products';
import { PropertyFilters, Product, CommonValue } from './types';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm?: string;
  title = 'modl-builder-demo';
  viewTiles = true;
  products = products;
  propertyFilters: PropertyFilters;
  commonValues: CommonValue[];

  constructor() {
    this.propertyFilters = { ItemType: '' };
    this.commonValues = [{
      key: 'Manufacturer',
      display: 'Manufacturer',
      values: this.getCommonValues('Manufacturer')
    }, {
      key: 'ItemType',
      display: 'Item Type',
      values: this.getCommonValues('ItemType')
    }, {
      key: 'ItemSubType1',
      display: 'Subtype',
      values: this.getCommonValues('ItemSubType1')
    }];
    console.log(this.commonValues);
  }

  getCommonValues(key: string): string[] {
    if (!this.propertyFilters[key]) {
      this.propertyFilters[key] = '';
    }
    const tempNull: string = null;
    return _.chain(this.products)
      .groupBy(key)
      .tap(obj => {
        if (obj[tempNull] && obj['']) {
          obj[tempNull].concat(obj['']);
          delete obj[''];
        }
      })
      .toArray()
      .sortBy((arr: any[]) => {
        return -1 * arr.length;
      })
      .map((arr: any[]) => {
        return arr[0][key];
      })
      .value();
  }

  displayList() {
    return _.filter(this.products, obj => {
      // checking propertyfilters
      let fitsPropertyCriteria = true;
      _.forEach(this.propertyFilters, (propertyValue, propertyName) => {
        const fitsProperty = !propertyValue || (obj[propertyName] && propertyValue === obj[propertyName]);
        if (!fitsProperty) {
          fitsPropertyCriteria = false;
        }
      });

      if (!fitsPropertyCriteria) {
        return false;
      }
      return this.fitsTypeAhead(obj);
    });
  }

  fitsTypeAhead(obj: Product) {
    if (this.searchTerm) {
      const properties = ['Series', 'Manufacturer', 'ItemType', 'ItemSubType1', 'ItemSubType2', 'BaseDesc'];
      for (let i = 0; i < properties.length; i++) {
        if (obj[properties[i]] && (_.includes(obj[properties[i]].toLowerCase(), this.searchTerm.toLowerCase()))) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }

  filter(type: string, value: any) {
    this.propertyFilters[type] = value;
  }
}
