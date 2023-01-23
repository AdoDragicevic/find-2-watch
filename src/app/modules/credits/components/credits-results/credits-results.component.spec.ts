import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsResultsComponent } from './credits-results.component';

describe('CreditsResultsComponent', () => {
  let component: CreditsResultsComponent;
  let fixture: ComponentFixture<CreditsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
