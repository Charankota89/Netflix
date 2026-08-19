import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSerialsComponent } from './tv-serials.component';

describe('TvSerialsComponent', () => {
  let component: TvSerialsComponent;
  let fixture: ComponentFixture<TvSerialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvSerialsComponent]
    });
    fixture = TestBed.createComponent(TvSerialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
