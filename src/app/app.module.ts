import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterByCityPipe } from './filter-by-city.pipe';
import { decimalDigits } from './custom-decimal-digits.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FilterByCityPipe, decimalDigits],
  bootstrap: [AppComponent],
})
export class AppModule {}
