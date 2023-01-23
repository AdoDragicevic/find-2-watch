import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMediaInfoListSwitchComponent } from './show-media-info-list-switch.component';

describe('ShowMediaInfoListSwitchComponent', () => {
  let component: ShowMediaInfoListSwitchComponent;
  let fixture: ComponentFixture<ShowMediaInfoListSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMediaInfoListSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMediaInfoListSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
