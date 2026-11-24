import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, 
  IonContent, IonList, IonLabel, IonItem ],
})
export class ViewDataComponent  implements OnInit {

  constructor(public sleepService:SleepService) {
   }

  ngOnInit() {}

  get allSleepData() {
      return SleepService.AllSleepData;

    }

}
