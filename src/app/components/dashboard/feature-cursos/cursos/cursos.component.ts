import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EstudiantesService } from '../../../../services/estudiantes.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiantes } from 'src/app/shared/interfaces/estudiantes';
import { TwentyDirective } from 'src/app/shared/directivas/twenty.directive';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/components/material/material.module';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { CursosService } from './services/cursos.service';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {


  datosUsuario: string;

  listaCursos: Cursos[] = [];

  admin: boolean = false;


  displayedColumns: string[] = ['id','curso', 'horario', 'precio', 'profesor', 'acciones'];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private _cursosService: CursosService,private _snackBar: MatSnackBar, private router: Router ,public dialog: MatDialog)  { }

  ngOnInit(): void {
    this.validaRol();
    this.loadView();
  }

  validaRol(){
    this.datosUsuario = JSON.stringify(localStorage.getItem('rol'));
    console.log(this.datosUsuario);

    if(localStorage.getItem('rol') === 'admin')
    {
      console.log("ES ADMIN")
      this.admin=true;

    }
    else{
    this.admin=false;
    console.log("ES USER")
    }
  }
  loadView(){
    this.cargarCursos();
  }

  cargarCursos(){
    this.listaCursos = this._cursosService.getCursos();
    this.dataSource = new MatTableDataSource(this.listaCursos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCurso(index: number){
    console.log(index);
    this._cursosService.eliminarCurso(index);
    this.cargarCursos();
    this._snackBar.open('Curso eliminado con exito','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
  }

  editarCurso(id:number){

    this._snackBar.open('Registro de curso editado','', {
      horizontalPosition: 'center',
     verticalPosition: 'top',
     duration: 1500,
 })


  }


 ingresarAdmin(){
  console.log("ACTIVANDO EL ADMIN")
   this.admin = true;
 }
 ingresarUsuario(){
   this.admin = false;
 }


 openDialog(id_delform:number): void {

  const curso = this._cursosService.getCursos().find(c => c.id === id_delform);
  const dialogRef = this.dialog.open(EditarCursoComponent, {
    data: curso,
    width: '1250px',

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    this.cargarCursos();
  });
}

openModal() {
  this.dialog.open(EditarCursoComponent, {
    width: '730px',
    height: '300px',
    data: {dataKey: "ajksdkajsklaf"}
  })
}
}
