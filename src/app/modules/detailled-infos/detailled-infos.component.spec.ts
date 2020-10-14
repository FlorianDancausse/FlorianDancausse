import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailledInfosComponent } from './detailled-infos.component';

describe('DetailledInfosComponent', () => {
  let component: DetailledInfosComponent;
  let fixture: ComponentFixture<DetailledInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailledInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailledInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
