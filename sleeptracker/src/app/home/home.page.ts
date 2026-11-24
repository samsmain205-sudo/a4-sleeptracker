import { Component } from '@angular/core';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';
import { IonDatetimeButton,
    IonButton,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonText
   } from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';
import { FormsModule} from '@angular/forms';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { IonDatetime } from '@ionic/angular/standalone';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [FormsModule, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonDatetime, IonGrid, IonRow, IonCol,
	FormsModule,IonHeader,IonText,IonImg,
    IonToolbar,IonTitle,IonContent,IonDatetime, IonDatetimeButton,IonButton,],
})
export class HomePage {
  /* Format dates correctly */
  sleepStartISO: string = new Date().toISOString();
  sleepEndISO: string = new Date().toISOString();
  constructor(public sleepService:SleepService) {

	}

	ngOnInit() {
		//console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	/*Based on user input return day and time */
	async logSleep() {
    const start = new Date(this.sleepStartISO);
    const end = new Date(this.sleepEndISO);
    this.sleepService.logOvernightData(new OvernightSleepData(start, end));


    await LocalNotifications.requestPermissions();
    //Content from slides from lecture 15-device_resources_signals
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Log your mood',
          body: 'Remember to record how you feel today.',
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
        },
      ],
    });

    console.log('Scheduled mood notification', notifs);
  }

}
