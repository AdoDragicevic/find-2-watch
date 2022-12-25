import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonInfoListComponent } from './show-person-info-list.component';

describe('ShowPersonInfoListComponent', () => {
  let component: ShowPersonInfoListComponent;
  let fixture: ComponentFixture<ShowPersonInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPersonInfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPersonInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
