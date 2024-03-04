import { Component } from '@angular/core';
import { createService } from '../create.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVER } from '../app.config';
import { CreateUrl } from '../util';

const PATH = '/customer';

interface Request {
  id: number,
  name: string,
  phone: string
}

const service = (path: string) => {
  return ( http: HttpClient, url: URL) => {
    return new createService<Request>(http, CreateUrl(url, path));
  }
}

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  providers: [
    { provide: createService, useFactory: service(PATH), deps: [HttpClient, URL_SERVER] }
  ]
})
export class CustomerComponent {
  constructor(private servicioCreateCustomer: createService<Request>) {
    this.servicioCreateCustomer.create({ id: 1, name: 'Adrian', phone: '666666666'})
      .subscribe(data => console.log(data));
  }
}