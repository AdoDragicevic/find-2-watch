import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputIconComponent } from './search-input-icon.component';

describe('SearchInputIconComponent', () => {
  let component: SearchInputIconComponent;
  let fixture: ComponentFixture<SearchInputIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInputIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInputIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
