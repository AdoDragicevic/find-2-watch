import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRelatedListComponent } from './show-related-list.component';

describe('ShowRelatedListComponent', () => {
  let component: ShowRelatedListComponent;
  let fixture: ComponentFixture<ShowRelatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRelatedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRelatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
