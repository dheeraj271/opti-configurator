import { Component } from '@angular/core';
import { CommonData } from "src/app/models/CommonData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  showSidebar: boolean = (sessionStorage.getItem('isLoggedIn') !== null) ? true : false; 
  main_class = ""; // (sessionStorage.getItem('isLoggedIn') !== null) ? "col-md-9 ml-sm-auto col-lg-10 px-4" : "col-md-12 ml-sm-auto col-lg-12 px-4";
}
