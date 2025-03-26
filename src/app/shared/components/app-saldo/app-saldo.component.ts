import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saldo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-saldo.component.html',
  styleUrl: './app-saldo.component.scss',
})
export class AppSaldoComponent {
  @Input() saldo: number = 1275.75;
  dinheiroEmConta: number = Number(this.saldo.toFixed(2));
}
