import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  constructor(private translateService: TranslateService) {}
  
  public downloadCV(): void {
    const isEnglishLanguage = this.translateService.currentLang == 'en';

    const link = document.createElement('a');
    
    link.href = isEnglishLanguage ? 'assets/resume.pdf' : 'assets/curriculo.pdf';
    link.download = isEnglishLanguage ? 'Resume-Sara-Kemily-Ventura.pdf' : 'Curriculo-Sara-Kemily-Ventura.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  public openLinkedin(): void {
    window.open('https://www.linkedin.com/in/sara-kemily', '_blank')
  }

  public openGitHub(): void {
    window.open('https://github.com/xSaraKemily', '_blank')
  }
}
