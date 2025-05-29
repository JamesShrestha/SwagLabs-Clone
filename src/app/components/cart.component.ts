import { Component } from '@angular/core';
import { HeaderComponent } from "./pages/header.component";
import { FooterComponent } from "./pages/footer.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <app-page-header [text]="text">
    </app-page-header>
    <section class="block">
      <p>
        cart works!
      </p>
    </section>
    <app-page-footer></app-page-footer>
  `,
  styles: ``
})
export class CartComponent {
  text:string = 'Your Cart';
}
