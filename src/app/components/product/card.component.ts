import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  template: `
    <div class="block box cell is-flex is-gap-4">
      <figure class="image is-128x128">
        <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
      </figure>
      <div class="card-info">
        <h3 class="is-size-4">Product Name</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, non quibusdam a iure illum placeat eveniet natus fuga commodi nam ipsam, reprehenderit sed minus? Fugiat sunt exercitationem provident perspiciatis iste.</p>
      </div>
    </div>
  `,
  styles: ``
})
export class CardComponent {

}
