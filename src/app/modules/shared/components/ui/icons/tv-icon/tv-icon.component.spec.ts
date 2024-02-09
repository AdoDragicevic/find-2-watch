import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvIconComponent } from './tv-icon.component';

describe('TvIconComponent', () => {
  let component: TvIconComponent;
  let fixture: ComponentFixture<TvIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
