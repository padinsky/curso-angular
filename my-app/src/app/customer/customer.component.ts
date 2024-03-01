import { Component } from '@angular/core';
import { createService } from '../create.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  constructor(private servicioCreateCustomer: createService<Customer>) {
    this.servicioCreateCustomer.create({ id: 1, name: 'Adrian', phone: '666666666'});
  }
}