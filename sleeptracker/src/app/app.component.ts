import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, BottomNavbarComponent],
})
export class AppComponent {
  constructor() {}
}
