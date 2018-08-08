// pre defined library 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { RouterModule, Routes } from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { UploadModule } from '@progress/kendo-angular-upload';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ToastrModule } from 'ngx-toastr';

// user defined components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// routing & navigation
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StorageServiceModule,
    ModalModule.forRoot(),
    InputsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    GridModule,
    DropDownsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    UploadModule,
    ButtonsModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    DateInputsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }