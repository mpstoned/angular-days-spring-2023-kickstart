import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public helloValue = "Hello";
  public numberValue = 3.14159;
  public color = 'hotpink';

  public onClick(event: MouseEvent): void {
    alert(event.clientX);
  }

  public onMouseMove(event: MouseEvent): void {
    console.log('X', event.clientX, 'Y', event.clientY);
  }
}
