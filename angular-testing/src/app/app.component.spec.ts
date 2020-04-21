import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

/*
  Here we create a component to mock the router-outlet component
  used by our component.
  Because we are just asserting that our component can be create
  we don't need to make the mock to behave like a router-outlet.
*/
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'router-outlet',
  template: '<div>Fake router-outlet</div>'
})
class FakeRouterOutletComponent { }

describe('AppComponent', () => {
  // wrapper around the component we want to test
  let fixture: ComponentFixture<AppComponent>;

  // `beforeEach` is executed before each test
  beforeEach(async(() => {
    /**
     * TestBed.configureTestingModule` configure the fake module to allow Angular
     * handle the instantiation and injection used by our component.
     * We usually only declare the components we want to test.
     */
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FakeRouterOutletComponent
      ]
    })
      // compile async to load the template HMTL when using URL
      .compileComponents();

    // creates the component
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    // `debugElment` is wrapper around the native elements to work safely accross platforms
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title in a h1 tag', () => {
    // trigger data binding and hooks
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-testing!');
  });
});
