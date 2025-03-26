import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fatura',
  imports: [CommonModule],
  templateUrl: './fatura.component.html',
  styleUrl: './fatura.component.scss',
})
export class FaturaComponent {
  @Input() fatura: number = 0;
}
