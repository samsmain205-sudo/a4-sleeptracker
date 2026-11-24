import { Component } from '@angular/core';
import { IonRange, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonCard, 
  IonCardHeader, IonCardContent, IonCardTitle} from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-log-mood',
  templateUrl: './log-mood.component.html',
  styleUrls: ['./log-mood.component.scss'],
  imports: [IonRange, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle],
})
export class LogMoodComponent {
  mood = 4;

  constructor(public sleepService: SleepService) {}

  updateMood(event: CustomEvent) {
    //console.log('ionChange emitted value:', event.detail.value);
    const value = event.detail.value;
     this.mood = value;
  }

  async logMood() {
    this.sleepService.logSleepinessData(
      new StanfordSleepinessData(this.mood)
    );
    await LocalNotifications.requestPermissions();
    //Content from slides from lecture 15-device_resources_signals
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Log your sleep',
          body: 'Remember to record if you slept today',
          id: 2,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
        },
      ],
    });

    console.log('Scheduled sleep notification', notifs);
  }
}