import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterIconComponent } from './poster-icon.component';

describe('PosterIconComponent', () => {
  let component: PosterIconComponent;
  let fixture: ComponentFixture<PosterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
