import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsCrewListComponent } from './credits-crew-list.component';

describe('CreditsCrewListComponent', () => {
  let component: CreditsCrewListComponent;
  let fixture: ComponentFixture<CreditsCrewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsCrewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsCrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
