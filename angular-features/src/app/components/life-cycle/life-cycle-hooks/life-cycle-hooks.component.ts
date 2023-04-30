import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

/**
 * Doc: https://angular.io/guide/lifecycle-hooks
 */
@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html'
})
export class LifeCycleHooksComponent implements OnChanges, OnInit, DoCheck,
      AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() value: string | undefined;

    constructor() {
      console.log('constructor');
      console.log('\tvalue:', this.value)
    }

    /**
     * Called after the constructor and @Input data binding.
     * Whenever the input is changed, this method is called.
     */
    ngOnChanges(changes: SimpleChanges): void {
      console.log('on change');
      console.log('\tvalue:', this.value);
      console.log('\tvalue before and after: ', changes)
    }

    /**
     * Called after constructor and first call to ngOnChanges.
     * It is called jsut once during components life cycle.
     * We should:
     * - perform complex initializations outside of the constructor (like call API);
     * - set up the component after Angular sets the input properties.
     */
    ngOnInit(): void {
      console.log('on init');
    }

    /**
     * Called after ngOnChanges on every change detection and after ngOnInit on the first run.
     * We should detect and act upon changes that Angular can't detect.
     */
    ngDoCheck(): void {
      console.log('do check');
    }

    /**
     * Called once after the first ngDoCheck.
     */
    ngAfterContentInit(): void {
      console.log('after content init');
    }

    /**
     * Called after ngAfterContentInit and every subsequent ngDoCheck.
     */
    ngAfterContentChecked(): void {
      console.log('after content checked');
    }

    /**
     * Called once after the first ngAfterContentChecked.
     */
    ngAfterViewInit(): void {
        console.log('after view init');
    }

    /**
     * Called after the ngAfterViewInit and every subsequent ngAfterContentChecked.
     */
    ngAfterViewChecked(): void {
        console.log('after view checked');
    }

    /**
     * Called just before the component is removed.
     * We should:
     * - unsubscribe from Observables and DOM events;
     * - stop interval timers;
     * - unregister all callbacks registered in global or application services.
     */
    ngOnDestroy(): void {
        console.log('on destroy');
    }
}
