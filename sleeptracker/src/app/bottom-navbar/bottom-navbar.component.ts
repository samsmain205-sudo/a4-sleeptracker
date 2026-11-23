import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { homeOutline, accessibilityOutline, statsChartOutline} from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'bottom-navbar.component.html',
  styleUrls: ['bottom-navbar.component.scss'],
  imports: [ IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class BottomNavbarComponent {
  constructor() {
    addIcons({ homeOutline, accessibilityOutline, statsChartOutline });
  }
}