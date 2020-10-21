/** angular */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
/** end angular */

/** classes */
import { MainInfosComponent } from './main-infos.component';
/** end classes */

describe('MainInfosComponent', () => {
  let component: MainInfosComponent;
  let fixture: ComponentFixture<MainInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
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
