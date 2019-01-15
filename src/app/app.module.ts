import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsTilesComponent } from './products-tiles/products-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTilesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
