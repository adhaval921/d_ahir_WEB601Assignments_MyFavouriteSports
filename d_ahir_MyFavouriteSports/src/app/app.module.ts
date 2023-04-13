import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
<<<<<<< Updated upstream
=======
import { ContentListComponent } from './content-list/content-list.component';
import { TypeEditPipe } from './type-edit.pipe';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    ContentCardComponent
=======
    ContentCardComponent,
    ContentListComponent,
    TypeEditPipe
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
