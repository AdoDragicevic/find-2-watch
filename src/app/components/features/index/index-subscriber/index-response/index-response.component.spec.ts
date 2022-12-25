import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexResponseComponent } from './index-response.component';

describe('IndexResponseComponent', () => {
  let component: IndexResponseComponent;
  let fixture: ComponentFixture<IndexResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
