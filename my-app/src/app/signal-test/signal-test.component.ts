import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-test',
  standalone: true,
  imports: [],
  templateUrl: './signal-test.component.html',
  styleUrl: './signal-test.component.css'
})
export class SignalTestComponent {
  count = signal(0);
 
  incrementCount(_ev: Event) {
    this.count.update(value => value + 1);
  }
}
