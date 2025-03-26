import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AppSaldoComponent } from './components/app-saldo/app-saldo.component';
import { FaturaComponent } from './components/fatura/fatura.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, AppSaldoComponent, FaturaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clone-Dispezzas';
}
