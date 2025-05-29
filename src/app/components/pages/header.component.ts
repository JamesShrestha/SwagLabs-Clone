import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [],
  template: `
    <div class="block py-2">
      <div class="is-flex is-align-items-center is-gap-3">
        <ng-content></ng-content>
        <h2 class="is-size-3">{{text}}</h2>
      </div>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  @Input() text:string = '';
}
