import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule], // Importa HttpClientModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  estudiantes: any[] = [];
  estudiante = {
    _id: null,
    nombre: "",
    ciclo: '',
    facultad: '',
    codigoEstudiante: '',
    estado: ''
  }

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.appService.getAll()
      .subscribe(
        (data: any) => this.estudiantes = data
      );
  }
  save(){

    if (this.estudiante._id){
      this.appService.update(this.estudiante._id, this.estudiante)
      .subscribe(() => this.getAll())
    } else {
      this.appService.create(this.estudiante)
      .subscribe(() => this.getAll())
    }

    this.estudiante = {
      _id: null,
      nombre: "",
      ciclo: '',
      facultad: '',
      codigoEstudiante: '',
      estado: ''
    }
  }

  edit(estudiante: any){
    this.estudiante = {
      ...estudiante
    }
  }

  del(estudiante: any){
    this.appService.delete(estudiante._id)
      .subscribe(() => this.getAll())
  }
}

