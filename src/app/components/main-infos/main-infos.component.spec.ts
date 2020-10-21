/** angular */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageWithTooltipComponent } from 'src/app/shared/components/image-with-tooltip/image-with-tooltip.component';
/** end angular */

/** classes */
import { MainInfosComponent } from './main-infos.component';
/** end classes */

describe('MainInfosComponent', () => {
  let component: MainInfosComponent;
  let fixture: ComponentFixture<MainInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTooltipModule, MatIconModule, BrowserAnimationsModule],
      declarations: [ MainInfosComponent, ImageWithTooltipComponent ]
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
