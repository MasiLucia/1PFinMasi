import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { CrearListaEstudiantesComponent } from '../crear-lista-estudiantes/crear-lista-estudiantes.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../../../feature-cursos/cursos/services/cursos.service';


@Component({
  selector: 'app-delle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  detalle: EstudiantesLista;
  value: any = null;
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CrearListaEstudiantesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EstudiantesLista,
    private router: Router,
    private fb : FormBuilder, private cursosService: CursosService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    }

  ngOnInit(): void {
    this.inicializar(this.data);
  }

  inicializar(estudiante:EstudiantesLista) {
    this.form = this.fb.group({
      estudiante:  estudiante.nombre + " " + estudiante.apellido,
      edad:  estudiante.edad,
      correo: estudiante.correo,
      telefono:  estudiante.telefono,
      cursos: CursosService
    })
  }

  cerrar(){
    this.dialogRef.close();
}

  onNoClick(): void {
    this.dialogRef.close();

  }

}
