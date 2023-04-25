import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UpdateCheckerService {

  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        const snack = this.snackbar.open('A new version is available', 'Update');
        snack.onAction().subscribe(() => {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        });
      });
    }
  }

}
