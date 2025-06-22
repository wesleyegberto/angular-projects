import { Component } from "@angular/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>This is a standalone footer component</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #f8f9fa;
      padding: 10px;
      text-align: center;
    }
  `]
})
export class FooterComponent {
}
