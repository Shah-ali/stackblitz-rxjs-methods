import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customDecimalDigits' })
export class decimalDigits implements PipeTransform {
  transform(numberSize: number, decDigits: number): string {
    return numberSize.toFixed(decDigits);
  }
}
