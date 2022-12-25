import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedListComponent } from './mixed-list.component';

describe('MixedListComponent', () => {
  let component: MixedListComponent;
  let fixture: ComponentFixture<MixedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
