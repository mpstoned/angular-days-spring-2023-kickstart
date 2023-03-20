import { Component } from '@angular/core';
import {ElementRef} from '@angular/core';
import {TodoService} from "./service/todo.service";
import {Todo} from "./models/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public helloValue = "Hello";
  public numberValue = 3.14159;
  public color = 'hotpink';
  // public todoObject = { name: "Wash clothes", done: false, id: 3 };
  public show = true;
  todos: Todo[] = []

  constructor(private readonly elementRef: ElementRef,
              private readonly todoService: TodoService){
    console.log("elementRef from constructor", elementRef);

    todoService.getAll().subscribe(todos => this.todos = todos);
  }


  logElementRef(){
    console.log("elementRef from console as property", this.elementRef);
  }

  public onClick(event: MouseEvent): void {
    alert(event.clientX);
  }

  public onMouseMove(event: MouseEvent): void {
    console.log('X', event.clientX, 'Y', event.clientY);
  }

  catchDoneEvent(todo: any) {
    console.log(todo)
  }


  toggle() {
    this.show = !this.show
  }
}
