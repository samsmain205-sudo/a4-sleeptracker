import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonRange, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-log-mood',
  templateUrl: './log-mood.component.html',
  styleUrls: ['./log-mood.component.scss'],
  imports: [FormsModule, IonRange, IonHeader, IonToolbar, IonTitle],
})
export class LogMoodComponent {
  mood = 5;
  testClick() {
  console.log('Button works!');
  }


}