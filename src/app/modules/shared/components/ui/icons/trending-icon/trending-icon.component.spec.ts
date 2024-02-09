import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingIconComponent } from './trending-icon.component';

describe('TrendingIconComponent', () => {
  let component: TrendingIconComponent;
  let fixture: ComponentFixture<TrendingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
