import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicworldsComponent } from './epicworlds.component';

describe('EpicworldsComponent', () => {
  let component: EpicworldsComponent;
  let fixture: ComponentFixture<EpicworldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpicworldsComponent]
    });
    fixture = TestBed.createComponent(EpicworldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
