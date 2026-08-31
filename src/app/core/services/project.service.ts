import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROJECTS } from '../constants/projects.constants';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getFeaturedProjects(limit = 3): Observable<Project[]> {
    return of(PROJECTS.slice(0, limit));
  }
}
