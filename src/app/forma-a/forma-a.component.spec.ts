import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaAComponent } from './forma-a.component';

describe('FormaAComponent', () => {
  let component: FormaAComponent;
  let fixture: ComponentFixture<FormaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
