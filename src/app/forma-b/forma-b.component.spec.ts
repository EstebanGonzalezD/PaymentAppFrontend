import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaBComponent } from './forma-b.component';

describe('FormaBComponent', () => {
  let component: FormaBComponent;
  let fixture: ComponentFixture<FormaBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
