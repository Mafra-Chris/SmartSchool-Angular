import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

@NgModule({
   declarations: [
      AppComponent,
      AlunosComponent,
      ProfessoresComponent,
      PerfilComponent,
      DashboardComponent,
      NavComponent,
      TituloComponent,
      DisciplinasComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      ReactiveFormsModule,
      ModalModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
