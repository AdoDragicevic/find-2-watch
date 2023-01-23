import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSearchBarComponent } from './index-search-bar.component';

describe('IndexSearchBarComponent', () => {
  let component: IndexSearchBarComponent;
  let fixture: ComponentFixture<IndexSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
