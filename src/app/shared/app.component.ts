import { Component } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AccountValuesComponent } from './components/account-values/account-values.component';
import { RecentEntriesComponent } from './components/recent-entries/recent-entries.component';

@Component({
  selector: 'app-root',
  imports: [TopBarComponent, AccountValuesComponent, RecentEntriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clone-Dispezzas';
}
