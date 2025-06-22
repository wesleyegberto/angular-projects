import { Component } from "@angular/core";

@Component({
  selector: 'app-comments',
  standalone: true,
  template: `
    <p>Users comments:</p>
    <ul>
      @for (comment of comments; track $index) {
      <li>{{ comment }}</li>
      }
    </ul>
  `
})
export class CommentsComponent {
  comments: string[] = [
    "This is the first comment.",
    "Here's the second comment.",
    "And this is the third comment.",
    "This is the fourth comment.",
    "Here's the fifth comment.",
    "And this is the sixth comment.",
    "This is the seventh comment.",
    "Here's the eighth comment.",
    "And this is the ninth comment.",
    "This is the tenth comment.",
    "Here's the eleventh comment.",
    "And this is the twelfth comment.",
  ];
}
