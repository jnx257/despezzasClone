import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEntriesComponent } from './recent-entries.component';

describe('RencentEntriesComponent', () => {
  let component: RecentEntriesComponent;
  let fixture: ComponentFixture<RecentEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentEntriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
