import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRelatedSubscriberComponent } from './show-related-subscriber.component';

describe('ShowRelatedSubscriberComponent', () => {
  let component: ShowRelatedSubscriberComponent;
  let fixture: ComponentFixture<ShowRelatedSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRelatedSubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRelatedSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
