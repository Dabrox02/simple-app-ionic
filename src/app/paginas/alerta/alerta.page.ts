import { Component, OnInit } from '@angular/core';
import { IonAlertCustomEvent,OverlayEventDetail } from '@ionic/core';
import { EncabezadoComponent } from 'src/app/componentes/encabezado/encabezado.component';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  alertButtons = ['Ok', {
    text: 'cancel',
    role: 'cancel',
    handler: () => {
      console.log('Alerta cancelada');
    },
  }];
  initialComponent:string = "/inicio";

  constructor() { }

  ngOnInit() {
  }

  setResult($event: IonAlertCustomEvent<OverlayEventDetail<any>>) {
    console.log(`Dismissed with role: ${$event.detail.role}`);
  }

}
