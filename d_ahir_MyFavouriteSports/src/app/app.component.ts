import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ContentListComponent } from '../app/content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd_ahir_MyFavouriteSports';
  constructor(private updateChecker: UpdateCheckerService) { }

  checkForUpdate() {
    this.updateChecker.checkForUpdate();
  }
    }



