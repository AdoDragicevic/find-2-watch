import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsSubscriberComponent } from './credits-subscriber.component';

describe('CreditsSubscriberComponent', () => {
  let component: CreditsSubscriberComponent;
  let fixture: ComponentFixture<CreditsSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsSubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
