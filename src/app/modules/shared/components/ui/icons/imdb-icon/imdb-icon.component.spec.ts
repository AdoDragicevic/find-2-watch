import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbIconComponent } from './imdb-icon.component';

describe('ImdbIconComponent', () => {
  let component: ImdbIconComponent;
  let fixture: ComponentFixture<ImdbIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
