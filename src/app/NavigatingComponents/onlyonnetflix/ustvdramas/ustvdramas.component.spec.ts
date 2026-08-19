import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstvdramasComponent } from './ustvdramas.component';

describe('UstvdramasComponent', () => {
  let component: UstvdramasComponent;
  let fixture: ComponentFixture<UstvdramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UstvdramasComponent]
    });
    fixture = TestBed.createComponent(UstvdramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
