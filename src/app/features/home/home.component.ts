import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { COMPANY_INFO } from '../../core/constants/company.constants';
import { Project } from '../../core/models/project.model';
import { Technology } from '../../core/models/technology.model';
import { ProjectService } from '../../core/services/project.service';
import { TechnologyService } from '../../core/services/technology.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit {
  company = COMPANY_INFO;
  featuredProjects$!: Observable<Project[]>;
  orderedTechnologyGroups$!: Observable<Array<{ category: string; items: Technology[] }>>;
  private readonly categoryOrder = [
    'Linguagens e Frameworks',
    'Mensageria e Comunicação',
    'Bancos de Dados e Armazenamento',
    'Relatórios',
    'Infraestrutura'
  ];

  constructor(
    private readonly projectService: ProjectService,
    private readonly technologyService: TechnologyService
  ) {}

  ngOnInit(): void {
    this.featuredProjects$ = this.projectService.getFeaturedProjects(3);
    this.orderedTechnologyGroups$ = this.technologyService.getTechnologies().pipe(
      map((items) => {
        const grouped = items.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = [];
          }
          acc[item.category].push(item);
          return acc;
        }, {} as Record<string, Technology[]>);

        return this.categoryOrder
          .filter((category) => grouped[category]?.length)
          .map((category) => ({ category, items: grouped[category] }));
      })
    );
  }

  trackByCategory(index: number, item: { category: string; items: Technology[] }): string {
    return item.category;
  }
}
