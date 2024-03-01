import { Component } from '@angular/core';
import { BService } from '../b.service';

@Component({
  selector: 'app-injector-test',
  standalone: true,
  imports: [],
  templateUrl: './injector-test.component.html',
  styleUrl: './injector-test.component.css'
})
export class InjectorTestComponent {
  constructor(private servicioB: BService) {
  }
}