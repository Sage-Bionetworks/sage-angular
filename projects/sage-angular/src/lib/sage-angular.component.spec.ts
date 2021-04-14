import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageAngularComponent } from './sage-angular.component';

describe('SageAngularComponent', () => {
  let component: SageAngularComponent;
  let fixture: ComponentFixture<SageAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
