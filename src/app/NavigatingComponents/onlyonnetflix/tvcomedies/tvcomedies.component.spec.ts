import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvcomediesComponent } from './tvcomedies.component';

describe('TvcomediesComponent', () => {
  let component: TvcomediesComponent;
  let fixture: ComponentFixture<TvcomediesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvcomediesComponent]
    });
    fixture = TestBed.createComponent(TvcomediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
