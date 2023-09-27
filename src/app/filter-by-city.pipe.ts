import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCity',
})
export class FilterByCityPipe implements PipeTransform {
  transform(items: any[], cityName: string): any[] {
    if (!cityName) return items; // If no city name is provided, return the original array

    cityName = cityName.toLowerCase(); // Convert city name to lowercase for case-insensitive search

    return items.filter((item) => {
      // Assuming each item has a 'city' property
      const itemCity = item.city.toLowerCase();
      return itemCity.includes(cityName);
    });
  }
}
