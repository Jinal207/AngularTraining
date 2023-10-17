import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltPipeComponent } from './built-pipe/built-pipe.component';
import { CustPipeComponent } from './cust-pipe/cust-pipe.component';

const routes: Routes = [
  { path: "builtinPipe", component: BuiltPipeComponent },
  { path: "customPipe", component: CustPipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
