import { Component, OnInit } from '@angular/core';
import { AlertaPage } from '../alerta/alerta.page';
import { ActionSheetPage } from '../action-sheet/action-sheet.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  pageAlerta = AlertaPage;
  pageActionSheet = ActionSheetPage;

  constructor() { }

  ngOnInit() {
  }

}
