import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class createService<T> {

  public create(entity: T) {
    console.log(entity);
  }
}
