import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianTvDramasComponent } from './indian-tv-dramas.component';

describe('IndianTvDramasComponent', () => {
  let component: IndianTvDramasComponent;
  let fixture: ComponentFixture<IndianTvDramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndianTvDramasComponent]
    });
    fixture = TestBed.createComponent(IndianTvDramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
