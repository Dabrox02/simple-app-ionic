import { Component, OnInit } from '@angular/core';
import { IonActionSheetCustomEvent,OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  logResult($event: IonActionSheetCustomEvent<OverlayEventDetail<any>>) {
    console.log(JSON.stringify($event.detail, null, 2));
  }

}
