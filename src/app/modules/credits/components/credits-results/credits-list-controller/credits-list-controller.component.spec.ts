import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsListControllerComponent } from './credits-list-controller.component';

describe('CreditsListControllerComponent', () => {
  let component: CreditsListControllerComponent;
  let fixture: ComponentFixture<CreditsListControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsListControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsListControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
