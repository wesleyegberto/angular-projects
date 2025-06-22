import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-switch',
  standalone: true,
  template: `
    <div>
      <h1>Conditions with <code>&#64;switch</code></h1>

      <button (click)="toggleRole()">Toggle Role</button>

      <p>Your current role is: <strong>{{ userRole || 'null' }}</strong></p>
      @switch (userRole) {
        @case ('admin') {
          <p>You have full access to the system.</p>
        }
        @case ('user') {
          <p>You have limited access to the system.</p>
        }
        @case ('guest') {
          <p>You have only view access to the system.</p>
        }
        @default {
          <p>You don't have a role</p>
        }
      }
    </div>
  `
})
export class ControlFlowSwitchComponent {
  userRole: string | null = null;

  toggleRole() {
    switch (this.userRole) {
      case 'admin':
        this.userRole = 'user';
        break;
      case 'user':
        this.userRole = 'guest';
        break;
      case 'guest':
        this.userRole = 'admin';
        break;
      default:
        this.userRole = 'guest';
    }
  }
}

