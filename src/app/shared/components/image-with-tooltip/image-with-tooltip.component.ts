/** angular */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/** end angular */

/** interfaces */
import { ImageWithTooltipDataInterface } from './interfaces/image-with-tooltip-data.interface';
/** end interfaces */

@Component({
  selector: 'app-image-with-tooltip',
  templateUrl: './image-with-tooltip.component.html',
  styleUrls: ['./image-with-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageWithTooltipComponent {
  /**
   * Contains the image properties and its tooltip
   */
  @Input() public data: ImageWithTooltipDataInterface;
}
