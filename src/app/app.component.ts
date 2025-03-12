import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { MAIN_TECHNOLOGIES_META, TECHNOLOGIES_META } from '../resources/technologies.meta';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, RouterOutlet, CommonModule, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
   public stackList!: any;

   public constructor(public translateService: TranslateService) {
    this.translateService.addLangs(['pt-br', 'en']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.stackList = MAIN_TECHNOLOGIES_META.map(item => TECHNOLOGIES_META[item]);
   }

  public selectLanguage(language: string): void {
    this.translateService.use(language);
  }
}
