import { Component, OnInit } from '@angular/core';
import { EncabezadoComponent } from 'src/app/componentes/encabezado/encabezado.component';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  initialComponent:string = "/inicio";

  constructor() { }

  ngOnInit() {
  }

}
