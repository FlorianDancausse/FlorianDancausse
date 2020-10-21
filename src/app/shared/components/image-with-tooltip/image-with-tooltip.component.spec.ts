/** angular */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
/** end angular */

/** classes */
import { ImageWithTooltipComponent } from './image-with-tooltip.component';
import { TestUtils } from '../../tests/test-utils';
/** end classes */

describe('ImageWithTooltipComponent', () => {
  let component: ImageWithTooltipComponent;
  let fixture: ComponentFixture<ImageWithTooltipComponent>;
  let testUtils: TestUtils<ImageWithTooltipComponent>;

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
    component.data = { alternative: 'alt text', source: 'assets/img/github_logo.png', tooltipText: 'tooltip text' };

    /** Init a testUtils instance with the current fixture */
    testUtils = new TestUtils(fixture);

    /** Detect changes on the current fixture */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('View', () => {
    it('Should show one img tag', () => {
      expect(testUtils.getElementAll('img').length).toBe(1);
      const img = testUtils.getElement('img');
      const imgAlt = img.attributes.alt as unknown as Attr;
      const imgSrc = img.attributes.src as unknown as Attr;
      const imgTooltip = img.attributes['ng-reflect-message'] as unknown as Attr;
      expect(imgAlt.value).toBe(component.data.alternative);
      expect(imgSrc.value).toBe(component.data.source);
      expect(imgTooltip.value).toBe(component.data.tooltipText);
    });
  });
});
