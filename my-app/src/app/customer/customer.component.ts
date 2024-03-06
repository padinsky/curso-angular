import { Component } from '@angular/core';
import { createService } from '../create.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVER } from '../app.config';
import { CreateUrl, ISpinner } from '../util';
import { Spinner } from '../spinner';

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
export class CustomerComponent implements ISpinner {
  constructor(private servicioCreateCustomer: createService<Request>) {
    this.create();
  }
  on(): void {
    console.log("On");
  }
  off(): void {
    console.log("Off");
  }

  @Spinner()
  private async create() {
    try {
      // spinner on -> Porque el usuario esta esperando algo
      const result = await this.servicioCreateCustomer.create({ id: 1, name: 'Adrian', phone: '666666666'});
    } catch (err) {

    } finally {
      // spinner of -> Porque el usuario esta esperando algo
    }
  }
}