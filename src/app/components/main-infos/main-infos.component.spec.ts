import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfosComponent } from './main-infos.component';

describe('MainInfosComponent', () => {
  let component: MainInfosComponent;
  let fixture: ComponentFixture<MainInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
