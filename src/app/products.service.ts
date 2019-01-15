import { products } from './products';
import { PropertyFilters, Product } from './types';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = products;
  propertyFilters: PropertyFilters;

  constructor() {
    this.propertyFilters = { ItemType: '' };
  }

  getCommonValues() {
    return [{
      key: 'Manufacturer',
      display: 'Manufacturer',
      values: this.gcv('Manufacturer')
    }, {
      key: 'ItemType',
      display: 'Item Type',
      values: this.gcv('ItemType')
    }, {
      key: 'ItemSubType1',
      display: 'Subtype',
      values: this.gcv('ItemSubType1')
    }];
  }

  gcv(key: string): string[] {
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

  displayList(searchTerm: string) {
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
      return this.fitsTypeAhead(obj, searchTerm);
    });
  }

  fitsTypeAhead(obj: Product, searchTerm: string) {
    if (searchTerm) {
      const properties = ['Series', 'Manufacturer', 'ItemType', 'ItemSubType1', 'ItemSubType2', 'BaseDesc'];
      for (let i = 0; i < properties.length; i++) {
        if (obj[properties[i]] && (_.includes(obj[properties[i]].toLowerCase(), searchTerm.toLowerCase()))) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }
}
