import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent, ViewTodoModel } from './popup/popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  title: string = 'AngularTodoApp';
  todoForm = new FormGroup({
    todo: new FormControl(''),
  });
  todoList: Array<string> = new Array<string>();

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  AddTodo() {
    if (this.todoForm.value.todo) {
      this.todoList.push(this.todoForm.value.todo ?? '');
      this.todoForm.reset();
    }
  }

  RemoveTodo(index: number) {
    this.todoList.splice(index, 1);
  }

  ViewTodo(index: number) {
    let todo: ViewTodoModel = {
      index: index + 1,
      todo: this.todoList.at(index) ?? '',
    };

    this.dialog.open(PopupComponent, {
      data: todo,
      hasBackdrop: true,
    });
  }
}
