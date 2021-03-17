import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagebioAngularComponent } from './sagebio-angular.component';

describe('SagebioAngularComponent', () => {
  let component: SagebioAngularComponent;
  let fixture: ComponentFixture<SagebioAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagebioAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagebioAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
