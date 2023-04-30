import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCycleHooksComponent } from './components/life-cycle/life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
  // Angular compiler can check if the component is in `declarations` property of the module and adds it if is missing
  { path: 'component-life-cycle', component: LifeCycleHooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
