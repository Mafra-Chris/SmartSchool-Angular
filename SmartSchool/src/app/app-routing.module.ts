import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'alunos', component: AlunosComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'professores', component: ProfessoresComponent},
  { path: 'disciplinas', component: DisciplinasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
