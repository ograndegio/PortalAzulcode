import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './features/contato/contato.component';
import { HomeComponent } from './features/home/home.component';
import { ProjetosComponent } from './features/projetos/projetos.component';
import { QuemSomosComponent } from './features/quem-somos/quem-somos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
