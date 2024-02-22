import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from '../services/todo.service';
import { TodoComponent } from './components/todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmitComponent } from './components/emit/emit.component';

@NgModule({
  imports: [CommonModule, SharedModule, TodoRoutingModule, ReactiveFormsModule],
  providers: [TodoService],
  declarations: [TodoComponent, EmitComponent],
})
export class TodoModule {}
