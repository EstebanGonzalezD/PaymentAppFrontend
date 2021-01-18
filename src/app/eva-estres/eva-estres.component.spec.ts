import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaEstresComponent } from './eva-estres.component';

describe('EvaEstresComponent', () => {
  let component: EvaEstresComponent;
  let fixture: ComponentFixture<EvaEstresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaEstresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaEstresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
