import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagebioComponent } from './sagebio.component';

describe('SagebioComponent', () => {
  let component: SagebioComponent;
  let fixture: ComponentFixture<SagebioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagebioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagebioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
