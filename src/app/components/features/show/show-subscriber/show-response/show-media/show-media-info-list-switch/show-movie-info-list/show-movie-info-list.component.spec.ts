import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMovieInfoListComponent } from './show-movie-info-list.component';

describe('ShowMovieInfoListComponent', () => {
  let component: ShowMovieInfoListComponent;
  let fixture: ComponentFixture<ShowMovieInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMovieInfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMovieInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
