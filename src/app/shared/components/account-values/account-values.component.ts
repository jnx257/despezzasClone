import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-values',
  imports: [],
  templateUrl: './account-values.component.html',
  styleUrl: './account-values.component.scss',
})
export class AccountValuesComponent {
  @Input() saldoConta: number = 0;
  @Input() faturaCredito: number = 0;

  currentMonth: string;

  constructor() {
    const now = new Date();
    this.currentMonth = this.getMonthName(now.getMonth());
  }

  getMonthName(monthIndex: number): string {
    const names = [
      'Janeiro',
      'Fevereiro',
      'Marco',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    return names[monthIndex];
  }
}
