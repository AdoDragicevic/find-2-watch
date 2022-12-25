import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTvInfoListComponent } from './show-tv-info-list.component';

describe('ShowTvInfoListComponent', () => {
  let component: ShowTvInfoListComponent;
  let fixture: ComponentFixture<ShowTvInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTvInfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTvInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
