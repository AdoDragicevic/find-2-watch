import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRelatedLinkComponent } from './show-related-link.component';

describe('ShowRelatedLinkComponent', () => {
  let component: ShowRelatedLinkComponent;
  let fixture: ComponentFixture<ShowRelatedLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRelatedLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRelatedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
