
import { TwentyDirective } from 'src/app/directivas/twenty.directive';
import { ReportesComponent } from './reportes/reportes.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from './../shared/shared.module';
import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CrearEstudianteComponent } from './estudiantes/crear-estudiante/crear-estudiante.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarEstudianteComponent } from './estudiantes/editar-estudiante/editar-estudiante.component';





@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    EstudiantesComponent,
    ReportesComponent,
    CrearEstudianteComponent,
    TwentyDirective,
    FooterComponent,
    EditarEstudianteComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    MatDialogModule
  ]


})
export class DashboardModule { }
