/** angular */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
/** end angular */

/** classes */
import { ImageWithTooltipComponent } from './image-with-tooltip.component';
/** end classes */

describe('ImageWithTooltipComponent', () => {
  let component: ImageWithTooltipComponent;
  let fixture: ComponentFixture<ImageWithTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageWithTooltipComponent ],
      imports: [ MatTooltipModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    /** Init the ComponentFixture instance of ImageWithTooltipComponent */
    fixture = TestBed.createComponent(ImageWithTooltipComponent);

    /** Get the current fixture component */
    component = fixture.componentInstance;

    /** Detect changes on the current fixture */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
