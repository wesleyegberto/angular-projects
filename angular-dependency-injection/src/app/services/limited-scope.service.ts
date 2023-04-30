import { Injectable } from '@angular/core';

// doesn't define the scope (however import/declare it will control)
// we need do one of the things:
// - `providers: [LimiedScopedService]` of a module, component or directive
// - `@Injectable({ providedIn: MyModule })`, this enable efficient tree shaking
// - `@Injectable({ providedIn: 'any' })`
@Injectable()
export class LimitedScopedService {
  public value: string = '';

  public toString() {
    return 'SimpleService with limited scoped (depends if it is on root module, feature module or component)';
  }
}
