import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <section class="box container is-max-tablet mt-4 p-0">
      <section class="container is-flex p-6">
        <form class="container is-max-tablet is-flex is-flex-direction-column">
          <div class="field">
            <div class="control">
              <input type="text" name="username" id="username" class="input" placeholder="Username">
            </div>
            <span class="help" id="username-error"></span>
          </div>
          <div class="field">
            <div class="control">
              <input type="password" name="password" id="password" class="input" placeholder="Password">
            </div>
            <span class="help" id="password-error"></span>
          </div>
          <div class="field">
            <div class="control">
              <button type="submit" class="button is-primary">LOGIN</button>
            </div>
          </div>
        </form>
        <div id="swaglabs_mascot">
          <img class="image is-square" src="img/Login_Bot_graphic.png" alt="SwagLabs Mascot" />
        </div>
      </section>
      <section id="login-infos" class="p-6">
        <div class="columns">
          <div class="column">
            <strong>Accepted usernames are:</strong>
            <ul>
              <li>standard_user</li>
              <li>locked_out_user</li>
              <li>problem_user</li>
              <li>performance_glitch_user</li>
            </ul>
          </div>
          <div class="column">
            <strong>Password for all users:</strong>
            <ul>
              <li>secret_sauce</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  `,
  styles: ``
})
export class LoginComponent {

}