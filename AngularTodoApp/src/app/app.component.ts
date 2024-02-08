import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'AngularTodoApp';
  todoForm = new FormGroup({
    todo: new FormControl(''),
  });
  todoList: Array<string> = new Array<string>();

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  AddTodo() {
    this.todoList.push(this.todoForm.value.todo ?? '');
  }

  RemoveTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
