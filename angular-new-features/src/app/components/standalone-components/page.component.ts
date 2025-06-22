import { Component } from "@angular/core";

import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-page',
  standalone: true,
  templateUrl: './page.component.html',
  imports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class PageComponent {
  title = 'Angular Page Component';
  description = 'This is a simple Angular component with a title and description.';
}
