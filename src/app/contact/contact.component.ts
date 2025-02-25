import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  public downloadCV(): void {
    const link = document.createElement('a');
    
    link.href = 'assets/resume.pdf';
    link.target = '_blank';
    link.download = 'Resume-Sara-Kemily-Ventura.pdf';

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
