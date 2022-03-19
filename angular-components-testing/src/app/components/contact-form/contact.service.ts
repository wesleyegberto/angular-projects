import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactService {
  constructor(private _http: HttpClient) { }

  sendContact(contact: any): Observable<any> {
    return this._http.post('https://httpbin.org/post', contact)
      .pipe(map(result => 'OK'));
  }
}
