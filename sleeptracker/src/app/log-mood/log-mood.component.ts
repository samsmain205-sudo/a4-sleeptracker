import { Component } from '@angular/core';
import { IonRange, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonCard, 
  IonCardHeader, IonCardContent, IonCardTitle} from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-log-mood',
  templateUrl: './log-mood.component.html',
  styleUrls: ['./log-mood.component.scss'],
  imports: [IonRange, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle],
})
export class LogMoodComponent {
  mood = 5;

  constructor(public sleepService: SleepService) {}

  updateMood(event: CustomEvent) {
    //console.log('ionChange emitted value:', event.detail.value);
    const value = event.detail.value;
     this.mood = value;
  }

  logMood() {
    this.sleepService.logSleepinessData(
      new StanfordSleepinessData(this.mood)
    );
  }
}