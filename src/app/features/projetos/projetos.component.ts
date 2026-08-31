import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
  standalone: false
})
export class ProjetosComponent implements OnInit {
  projects$!: Observable<Project[]>;

  constructor(private readonly projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();
  }
}
