import { NgClass, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { log } from 'console';
export interface ToDoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  todoList: ToDoItem[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTodoItem: ToDoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false,
      };
      this.todoList.push(newTodoItem);
      this.newTask = '';
    }
  }

  toggleCompleted(index: number) {
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  deleteTask(id: number) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}
