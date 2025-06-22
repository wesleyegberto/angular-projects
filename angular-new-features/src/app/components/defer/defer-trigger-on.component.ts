import { Component } from "@angular/core";

@Component({
  selector: 'app-defer-trigger-on',
  template: `
    <h2>Defer - Trigger <code>on</code></h2>
    <p>
      This component demonstrates the usage of the <code>defer</code> block with the <code>on</code> trigger.
      It will load the deferred content when the specified event occurs.
    </p>
    <hr/>
    <div>
      @defer (on hover) {
        <p>Deferred content loaded after hover.</p>
      } @placeholder {
        <p class="trigger">
          The loading has not started yet.<br>
          Hover over this text to trigger the loading.
        </p>
      }
    </div>
    <hr/>
    <div>
      @defer (on timer(5s)) {
        <p>Deferred content loaded after 5 seconds.</p>
      } @placeholder (minimum 3000ms) {
        <p class="trigger">
          The loading has not started yet.<br>
          Wait for 5 seconds to trigger the loading.
        </p>
      }
    </div>
    <hr/>
    <div>
      <button #btnLoad>Click to load</button>
      @defer (on interaction(btnLoad)) {
        <p>Deferred content loaded after button click.</p>
      } @placeholder (minimum 3000ms) {
        <p class="trigger">
          Click at the button to load.<br>
        </p>
      }
    </div>
    <hr/>
    <div>
      @defer (on viewport(text)) {
        <p>Deferred content loaded after text entered the viewport.</p>
      } @placeholder (minimum 3000ms) {
        <p class="trigger">Load will occur when the bellow text enters the viewport.</p>
      }
      <br><br><br><br><br><br><br><br><br>
      <p #text>Text to trigger loading after entering the viewport.</p>
    </div>
  `,
  styles: [`
    .trigger {
      background-color: #f0f0f0;
      padding: 10px;
      border-radius: 5px;
    }
    .trigger:hover {
      background-color: #e0e0e0;
    }
  `]
})
export class DeferTriggerOnComponent {

}
