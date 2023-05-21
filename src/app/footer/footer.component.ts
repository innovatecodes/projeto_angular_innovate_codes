import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year2022: string = '2022';
  currentYear = new Date();
  lineThrough: { textDecoration: string } = {
    textDecoration: 'line-through',
  };
}
