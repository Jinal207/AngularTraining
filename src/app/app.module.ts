import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltPipeComponent } from './built-pipe/built-pipe.component';
import { CustPipeComponent } from './cust-pipe/cust-pipe.component';
import { SearchPipePipe } from './search-pipe.pipe';
import {FormsModule } from "@angular/forms";
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { BuiltDirectiveComponent } from './built-directive/built-directive.component'
@NgModule({
  declarations: [
    AppComponent,
    BuiltPipeComponent,
    CustPipeComponent,
    SearchPipePipe,
    CustomDirectiveDirective,
    CustomDirectiveComponent,
    BuiltDirectiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
