import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsPersonInfoComponent } from './credits-person-info.component';

describe('CreditsPersonInfoComponent', () => {
  let component: CreditsPersonInfoComponent;
  let fixture: ComponentFixture<CreditsPersonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsPersonInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
