import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

//import icons for navbar
import { addIcons } from 'ionicons';
import { homeOutline, accessibilityOutline, statsChartOutline} from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'bottom-navbar.component.html',
  styleUrls: ['bottom-navbar.component.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterLink],
})
export class BottomNavbarComponent {
  constructor() {
    //add icons for navbar
    addIcons({ homeOutline, accessibilityOutline, statsChartOutline });
  }
}