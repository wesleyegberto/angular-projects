import { Injectable } from '@angular/core';

// singleton service (doesn't need to be provided in any module - Angular will take care of it)
@Injectable({providedIn: 'root'})
export class SingletonService {
  public toString() {
    return 'RootService with providedIn root';
  }
}
