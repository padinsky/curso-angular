import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

export class createService<T> {

  constructor(private http: HttpClient, private url: string) {
    console.log(this.url);
  }

  public create(entity: T): Promise<T> {
    return lastValueFrom(this.http.post<T>(this.url, entity));
  }
}
