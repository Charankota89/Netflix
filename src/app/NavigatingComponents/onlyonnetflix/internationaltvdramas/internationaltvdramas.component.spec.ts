import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationaltvdramasComponent } from './internationaltvdramas.component';

describe('InternationaltvdramasComponent', () => {
  let component: InternationaltvdramasComponent;
  let fixture: ComponentFixture<InternationaltvdramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationaltvdramasComponent]
    });
    fixture = TestBed.createComponent(InternationaltvdramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
