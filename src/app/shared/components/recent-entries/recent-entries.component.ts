import { Component } from '@angular/core';
import { recentPurchases } from './recent-entries.service';

@Component({
  selector: 'app-recent-entries',
  imports: [],
  templateUrl: './recent-entries.component.html',
  styleUrl: './recent-entries.component.scss',
})
export class RecentEntriesComponent {
  linhas = recentPurchases.length;
  headers = recentPurchases.keys();

  constructor() {
    this.headers = recentPurchases.keys();
    this.linhas = recentPurchases.length;
  }
}
