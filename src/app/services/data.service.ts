import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  defaultUrl = 'https://my-json-server.typicode.com/bones-H/myJson/boardGames'
  constructor(private http: HttpClient) {}

  getJson(url = this.defaultUrl): Observable<any> {
    return this.http.get(url).pipe(
      delay(2000)
    );
  }

}
