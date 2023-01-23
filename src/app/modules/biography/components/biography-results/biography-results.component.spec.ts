import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyResultsComponent } from './biography-results.component';

describe('BiographyResultsComponent', () => {
  let component: BiographyResultsComponent;
  let fixture: ComponentFixture<BiographyResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiographyResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiographyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
