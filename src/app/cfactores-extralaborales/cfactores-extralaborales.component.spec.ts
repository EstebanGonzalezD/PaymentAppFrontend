import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfactoresExtralaboralesComponent } from './cfactores-extralaborales.component';

describe('CfactoresExtralaboralesComponent', () => {
  let component: CfactoresExtralaboralesComponent;
  let fixture: ComponentFixture<CfactoresExtralaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfactoresExtralaboralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfactoresExtralaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
