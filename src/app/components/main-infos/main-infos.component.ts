/** angular */
import { Component } from '@angular/core';
/** end angular */

/** interfaces */
import { ImageWithTooltipDataInterface } from 'src/app/shared/components/image-with-tooltip/interfaces/image-with-tooltip-data.interface';
/** end interfaces */

@Component({
  selector: 'app-main-infos',
  templateUrl: './main-infos.component.html',
  styleUrls: ['./main-infos.component.scss']
})
export class MainInfosComponent {
  public languageLogoImages: ImageWithTooltipDataInterface[] = [
   { alternative: 'typescript logo', source: 'assets/img/typescript_logo.svg', tooltipText: 'TypeScript' },
   { alternative: 'angular logo', source: 'assets/img/angular_logo.svg', tooltipText: 'Angular' },
   { alternative: 'nodejs logo', source: 'assets/img/nodejs_logo.svg', tooltipText: 'NodeJS' },
   { alternative: 'nestjs logo', source: 'assets/img/nestjs_logo.svg', tooltipText: 'NestJS' },
  ];

  public linkedinImage: ImageWithTooltipDataInterface = {
    alternative: 'linkedin logo',
    source: 'assets/img/linkedin_logo.png',
    tooltipText: 'LinkedIn'
  };

  public githubImage: ImageWithTooltipDataInterface = {
    alternative: 'github logo',
    source: 'assets/img/github_logo.png',
    tooltipText: 'GitHub'
  };
}
