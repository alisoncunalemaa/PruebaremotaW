import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import { Publicaciones } from 'src/app/models/publicaciones';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-crudpublicaciones',
  templateUrl: './crudpublicaciones.component.html',
  styleUrls: ['./crudpublicaciones.component.css']
})
export class CrudpublicacionesComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private tarjetaService:TarjetaService) {
    this.form= this.formBuilder.group({
      id:3,
      titulo:["",[Validators.required]],
      descripcion:["",[Validators.required]]
     })
    }
  ngOnInit(): void {
  }
  guardarpublicacion(){
    console.log(this.form);
    const publicacion : Publicaciones={
      titulo: this.form.get('titulo')?.value,
      descripcion: this.form.get('titulo')?.value,
    }
    this.tarjetaService.guardarPublicacion(publicacion).subscribe(data =>{
      console.log("guardado");
      this.form.reset();
    });
  }
}
