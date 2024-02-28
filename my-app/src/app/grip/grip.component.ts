import { Component, HostListener } from '@angular/core';
import { DayComponent } from "../day/day.component";

@Component({
    selector: 'app-grip',
    standalone: true,
    templateUrl: './grip.component.html',
    styleUrl: './grip.component.css',
    imports: [DayComponent]
})
export class GripComponent {
  days: number[] = [];
  ngOnInit(): void {
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
  }

  @HostListener('click', ["$event"])
  handlerDay(ev: Event) {
    const node = (ev.composedPath() as HTMLElement[])
      .find(n => n.dataset && 'day' in n.dataset); // Cortocircuito
    if (node) {
      const {day} = node.dataset;
      console.log(day);
    }
  }
}
