import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexResultsComponent } from './index-results.component';

describe('IndexResultsComponent', () => {
  let component: IndexResultsComponent;
  let fixture: ComponentFixture<IndexResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
