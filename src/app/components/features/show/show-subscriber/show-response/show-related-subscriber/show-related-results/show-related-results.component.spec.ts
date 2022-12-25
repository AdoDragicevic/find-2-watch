import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRelatedResultsComponent } from './show-related-results.component';

describe('ShowRelatedResultsComponent', () => {
  let component: ShowRelatedResultsComponent;
  let fixture: ComponentFixture<ShowRelatedResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRelatedResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRelatedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
