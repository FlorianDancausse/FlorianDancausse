/** angular */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
/** end angular */

/** classes */
import { DetailledInfosComponent } from './detailled-infos.component';
/** end classes */

describe('DetailledInfosComponent', () => {
  let component: DetailledInfosComponent;
  let fixture: ComponentFixture<DetailledInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailledInfosComponent ],
      imports: [ MatIconModule ]
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
