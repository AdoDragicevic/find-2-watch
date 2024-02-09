import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsBtnsComponent } from './credits-btns.component';

describe('CreditsBtnsComponent', () => {
  let component: CreditsBtnsComponent;
  let fixture: ComponentFixture<CreditsBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsBtnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
