import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InabitofahurryComponent } from './inabitofahurry.component';

describe('InabitofahurryComponent', () => {
  let component: InabitofahurryComponent;
  let fixture: ComponentFixture<InabitofahurryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InabitofahurryComponent]
    });
    fixture = TestBed.createComponent(InabitofahurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
