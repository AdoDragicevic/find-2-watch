import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMediaLinksComponent } from './show-media-links.component';

describe('ShowMediaLinksComponent', () => {
  let component: ShowMediaLinksComponent;
  let fixture: ComponentFixture<ShowMediaLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMediaLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMediaLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
