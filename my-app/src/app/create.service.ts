import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class createService<T> {

  constructor(private http: HttpClient, private url: string) {
    console.log(this.url);
  }

  public create(entity: T): Observable<T> {
    return this.http.post<T>(this.url, entity);
  }
}
