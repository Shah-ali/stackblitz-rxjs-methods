import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const source = of(1, 2, 3, 4, 5);
    const arraySource = from([1, 2, 3, 4, 5]);
    source.subscribe((val) => console.log(val));
    console.log('-----');
    arraySource.subscribe((val) => console.log(val));
  }
}
