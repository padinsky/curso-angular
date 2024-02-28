import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GripComponent } from "./grip/grip.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, GripComponent]
})
export class AppComponent {
  name: String = 'Adrián Padilla';
  array: number[] = [1,2,3,4,5,6];

  public printHello(event: Event) {
    event.stopPropagation();
    console.log("Hello world!");
    this.array.push(this.array.length + 1);
  }
}
