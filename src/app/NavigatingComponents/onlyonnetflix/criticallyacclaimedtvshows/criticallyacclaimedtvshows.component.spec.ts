import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticallyacclaimedtvshowsComponent } from './criticallyacclaimedtvshows.component';

describe('CriticallyacclaimedtvshowsComponent', () => {
  let component: CriticallyacclaimedtvshowsComponent;
  let fixture: ComponentFixture<CriticallyacclaimedtvshowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriticallyacclaimedtvshowsComponent]
    });
    fixture = TestBed.createComponent(CriticallyacclaimedtvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
