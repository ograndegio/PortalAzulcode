import { Component } from '@angular/core';
import { COMPANY_INFO } from '../../../core/constants/company.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {
  company = COMPANY_INFO;
  currentYear = new Date().getFullYear();

  readonly socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/azulcodebr/' },
    { label: 'GitHub', href: 'https://github.com/AzulcodeBR' },
    { label: 'E-mail', href: 'mailto:contato@azulcode.com.br' }
  ];
}
