import { Routes } from '@angular/router';

import { PageComponent } from './components/standalone-components/page.component';
import { HomeComponent } from './home/home.component';
import { WritableSignalComponent } from './signals/writable/writable-signal.component';
import { ComputedSignalComponent } from './signals/computed/computed-signal.component';
import { ControlFlowForComponent } from './templates/control-flow/control-flow-for.component';
import { ControlFlowIfComponent } from './templates/control-flow/control-flow-if.component';
import { ControlFlowSwitchComponent } from './templates/control-flow/control-flow-switch.component';
import { InputsOutputsComponent } from './components/inputs-outputs/inputs-outputs.component';
import { DeferBasicUsageComponent } from './components/defer/defer-basic-usage.component';
import { DeferTriggerOnComponent } from './components/defer/defer-trigger-on.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'standalone-components', component: PageComponent },
  { path: 'inputs-outputs', component: InputsOutputsComponent },
  { path: 'defer-basic-usage', component: DeferBasicUsageComponent },
  { path: 'defer-trigger-on', component: DeferTriggerOnComponent },

  { path: 'writable-signal', component: WritableSignalComponent },
  { path: 'computed-signal', component: ComputedSignalComponent },

  { path: 'control-flow-if', component: ControlFlowIfComponent },
  { path: 'control-flow-for', component: ControlFlowForComponent },
  { path: 'control-flow-switch', component: ControlFlowSwitchComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
