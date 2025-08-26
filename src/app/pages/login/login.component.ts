import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  serviceSpotify = inject(SpotifyService);
  anoAtual = new Date().getFullYear();

  async fazerLogin() {
    const url = await this.serviceSpotify.obterUrlLogin();
  }
}
