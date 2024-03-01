import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GripComponent } from "./grip/grip.component";
import { SignalTestComponent } from "./signal-test/signal-test.component";
import { TimerComponent } from "./timer/timer.component";
import { InjectorTestComponent } from "./injector-test/injector-test.component";
import { CustomerComponent } from "./customer/customer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    GripComponent,
    SignalTestComponent,
    TimerComponent,
    InjectorTestComponent,
    CustomerComponent
  ]
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
