import { CrearEstudianteComponent } from './estudiantes/crear-estudiante/crear-estudiante.component';
import { ReportesComponent } from './reportes/reportes.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',component: DashboardComponent, children: [
      {path: '', component: InicioComponent},     
      {path: 'estudiantes', component: EstudiantesComponent},
      {path: 'reportes', component: ReportesComponent},
      {path: 'crear-estudiante', component: CrearEstudianteComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
