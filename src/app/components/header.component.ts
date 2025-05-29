import { Component } from '@angular/core';
import { NgIconComponent, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherMenu, featherShoppingCart } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({ 
      featherMenu, 
      featherShoppingCart 
    }),
    provideNgIconsConfig({
      size: '1.5em',
    })
  ],
  template: `
    <header class="container is-flex {{justifyContent}} is-align-items-center block py-4">
      @if (isAuthenticated) {
        <ng-icon name="featherMenu"></ng-icon>
      }
      <img src="img/SwagLabs_logo.png" alt="SwagLabs"/>
      @if (isAuthenticated) {
        <ng-icon name="featherShoppingCart"></ng-icon>
      }
    </header>
  `,
  styles: ``
})
export class HeaderComponent {
  isAuthenticated:boolean = false;
  justifyContent:string = this.isAuthenticated ? 'is-justify-content-space-between' : 'is-justify-content-center';
}
