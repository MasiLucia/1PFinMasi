import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { EstudiantesComponent } from '../components/dashboard/estudiantes/estudiantes.component';
import { Estudiantes } from '../interfaces/estudiantes';


@Pipe({
  name: 'apellidoPipe'
})
export class ApellidoPipe implements PipeTransform {

  transform(value: Estudiantes){
    return value.apellido;
  }



}

@NgModule({
  declarations: [ApellidoPipe],
  exports: [ApellidoPipe],
  imports: [CommonModule]
})
export class ApellidoPipeModule {}
