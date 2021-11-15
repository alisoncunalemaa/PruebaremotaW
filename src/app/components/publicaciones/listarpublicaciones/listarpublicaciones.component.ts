  import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-listarpublicaciones',
  templateUrl: './listarpublicaciones.component.html',
  styleUrls: ['./listarpublicaciones.component.css']
})
export class ListarpublicacionesComponent implements OnInit {

  constructor(public tarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this.tarjetaService.consultarPub();
  }

}
