import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

export interface ViewTodoModel {
  index: number;
  todo: string;
}

@Component({
  selector: '#app-popup',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public todo: ViewTodoModel) {}
}
