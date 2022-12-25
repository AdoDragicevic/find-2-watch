import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsCastListComponent } from './credits-cast-list.component';

describe('CreditsCastListComponent', () => {
  let component: CreditsCastListComponent;
  let fixture: ComponentFixture<CreditsCastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsCastListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsCastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
