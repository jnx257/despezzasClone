import { Component, OnInit } from '@angular/core';
import { Purchase, recentPurchases } from './recent-entries.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-entries',
  imports: [CommonModule],
  templateUrl: './recent-entries.component.html',
  styleUrl: './recent-entries.component.scss',
})
export class RecentEntriesComponent implements OnInit {
  purchases: Purchase[] = [];

  ngOnInit(): void {
    this.purchases = recentPurchases;
    console.log(this.purchases);
  }
}
