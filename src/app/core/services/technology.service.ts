import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TECHNOLOGIES } from '../constants/technologies.constants';
import { Technology } from '../models/technology.model';

@Injectable({ providedIn: 'root' })
export class TechnologyService {
  getTechnologies(): Observable<Technology[]> {
    return of(TECHNOLOGIES);
  }
}
