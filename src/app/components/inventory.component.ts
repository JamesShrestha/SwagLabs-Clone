import { Component } from '@angular/core';
import { HeaderComponent } from "./pages/header.component";
import { FooterComponent } from "./pages/footer.component";
import { CardComponent } from "./product/card.component";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent],
  template: `
    <app-page-header [text]="text">
      <img src="img/peek.png" alt=""/>
    </app-page-header>
    <section class="block fixed-grid has-2-cols">
      <div class="grid">
        @for (item of items; track $index) {
          <app-product-card></app-product-card>
        }
      </div>
    </section>
    <app-page-footer></app-page-footer>
  `,
  styles: ``
})
export class InventoryComponent {
  text: string = 'Products';
  items: number[] = [1,2,3,4,5,6,7,8,9,10];
}
