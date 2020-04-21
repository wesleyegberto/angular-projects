import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleService {
  public getMagicNumber() {
    return 42;
  }
}
