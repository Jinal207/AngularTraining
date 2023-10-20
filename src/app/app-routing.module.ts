import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltPipeComponent } from './built-pipe/built-pipe.component';
import { CustPipeComponent } from './cust-pipe/cust-pipe.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { BuiltDirectiveComponent } from './built-directive/built-directive.component';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';

const routes: Routes = [
  { path: "builtinPipe", component: BuiltPipeComponent },
  { path: "customPipe", component: CustPipeComponent },
  { path: "customDirective", component: CustomDirectiveComponent },
  { path: "builtDirective", component:BuiltDirectiveComponent },
  { path: "arrayMethods", component:ArrayMethodsComponent },
  { path: "templateDrivenForm", component:TempDrivenFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
