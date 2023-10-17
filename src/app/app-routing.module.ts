import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltPipeComponent } from './built-pipe/built-pipe.component';
import { CustPipeComponent } from './cust-pipe/cust-pipe.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { BuiltDirectiveComponent } from './built-directive/built-directive.component';

const routes: Routes = [
  { path: "builtinPipe", component: BuiltPipeComponent },
  { path: "customPipe", component: CustPipeComponent },
  { path: "customDirective", component: CustomDirectiveComponent },
  { path: "builtDirective", component:BuiltDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
