import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRelatedComponent } from './show-related.component';

describe('ShowRelatedComponent', () => {
  let component: ShowRelatedComponent;
  let fixture: ComponentFixture<ShowRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRelatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
