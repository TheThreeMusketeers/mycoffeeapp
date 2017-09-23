import {Component, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-confirm-component-dialog',
    templateUrl: './confirm-dialog-template.component.html',
  })
  export class ConfirmDialogTemplateComponent {
  
    constructor(
      public dialogRef: MdDialogRef<ConfirmDialogTemplateComponent>,
      @Inject(MD_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }//onNoClick
  
  }//cs