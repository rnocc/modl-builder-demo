import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTilesComponent } from './products-tiles.component';

describe('ProductsTilesComponent', () => {
  let component: ProductsTilesComponent;
  let fixture: ComponentFixture<ProductsTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
