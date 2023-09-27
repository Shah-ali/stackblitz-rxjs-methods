import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filterCity: string = '';
  decimalValue: number = 2;

  items: any[] = [
    { name: 'Item 1', city: 'New York' },
    { name: 'Item 2', city: 'Los Angeles' },
    { name: 'Item 3', city: 'Chicago' },
  ];

  ngOnInit() {}
}
