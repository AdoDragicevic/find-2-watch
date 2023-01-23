import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaGenresComponent } from './media-genres.component';

describe('MediaGenresComponent', () => {
  let component: MediaGenresComponent;
  let fixture: ComponentFixture<MediaGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaGenresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
