import { Component } from '@angular/core';
import { COMPANY_INFO } from '../../core/constants/company.constants';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss'],
  standalone: false
})
export class QuemSomosComponent {
  company = COMPANY_INFO;
}
