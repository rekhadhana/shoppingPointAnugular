import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReRegisterComponent } from './re-register.component';

describe('ReRegisterComponent', () => {
  let component: ReRegisterComponent;
  let fixture: ComponentFixture<ReRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
