import { Component } from '@angular/core';
import { TECHNOLOGIES_META, TechnoologiesEnum } from '../../resources/technologies.meta';
import { TranslateModule } from '@ngx-translate/core';
import { PROJECTS_META, ProjectsEnum } from '../../resources/prjects.meta';

enum goToEnum {
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS'
}

interface imgInterface {
  url: string,
  show?: boolean
}

@Component({
  selector: 'app-projects',
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  public technologiesMeta = TECHNOLOGIES_META;

  public projects;

  public constructor() {
    this.projects = Object.entries(PROJECTS_META).map(item => item[1]);
  }

  public carousselClick(goTo: goToEnum | string, imgs: imgInterface[]): void {
    const currentImgIndex = imgs.findIndex(item => item.show);

    imgs[currentImgIndex].show = false;
   
    if (goTo == goToEnum.NEXT) {
      const nextImg = imgs[currentImgIndex + 1];

      if (nextImg) {
        nextImg.show = true;
      } else if (imgs.length - 1 == currentImgIndex) {
        imgs[0].show = true;
      } else {
        imgs[currentImgIndex - 1].show = true;
      }
    }

    if (goTo == goToEnum.PREVIOUS) {
      const nextImg = imgs[currentImgIndex + 1];
      const previousImg = imgs[currentImgIndex - 1];

      if (previousImg) {
        previousImg.show = true;
      } else if (!currentImgIndex) {
        imgs[imgs.length - 1].show = true;
       
      } else {
        nextImg.show = true;
      }
    }
  }

  public openProject(project: any): void {
    window.open(project.link ?? project.github_link, '_blank')
  }
}
