import { isPlatformBrowser } from '@angular/common';
import { Component, effect, signal, afterNextRender, Injector, Inject, PLATFORM_ID  } from '@angular/core';
import { platform } from 'node:os';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time = signal(this.formatDate());
  isBrowser = true;
  
  /*// Le falta la hidratación
  constructor() {
    afterNextRender(()  => {
      effect((onCleanup) => {
        const handle = setInterval(() => this.time.set(this.formatDate()), 1000);
        onCleanup(() => {
          clearInterval(handle);
        });
      });
    });
  }
  */

  constructor(private injector: Injector, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    effect((onCleanup) => {
      if (this.isBrowser) {
        const handle = setInterval(() => this.time.set(this.formatDate()), 1000);
        onCleanup(() => {
          clearInterval(handle);
        });
      }
      
    }, {injector: this.injector});
  }

  private getDate(): Date {
    return new Date();
  }

  private formatDate() {
    const date = this.getDate();
    let options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('es-ES', options as Intl.DateTimeFormatOptions).format(date);
  }
}
