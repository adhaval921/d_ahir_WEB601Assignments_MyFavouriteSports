import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';

import { ContentListComponent } from './content-list/content-list.component';
import { TypeEditPipe } from './type-edit.pipe';
import { UpdateCheckerService } from './update-checker.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentCardComponent,
    ContentListComponent,
    TypeEditPipe
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('service-worker.js',{enabled: Environment.production}),
    MatSnackBarModule
  ],
  providers: [
    UpdateCheckerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
