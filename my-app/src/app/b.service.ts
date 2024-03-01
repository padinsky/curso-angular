import { Inject, Injectable } from '@angular/core';
import { CService } from './c.service';
import { URL_SERVER } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class BService {

  constructor(private _servicioC: CService, @Inject(URL_SERVER) servidor: string) { 
    console.log("ServicioB");
    console.log("Servidor " + servidor);
  }
}
