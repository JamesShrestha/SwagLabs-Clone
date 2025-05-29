import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherFacebook, featherTwitter } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-page-footer',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ featherTwitter, featherFacebook })],
  template: `
    <footer class="block is-flex is-justify-content-space-between">
      <section>
        <div class="is-flex">
          <div class="icon"><ng-icon name="featherTwitter"></ng-icon></div>
          <div class="icon"><ng-icon name="featherFacebook"></ng-icon></div>
        </div>
        <div class="" id="brand-copy">
          <span>&copy; 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy</span>
        </div>
      </section>
      <section>
        <img class="img" src="img/SwagBot_Footer_graphic.png" alt="SwagBot Footer Image">
      </section>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

}
