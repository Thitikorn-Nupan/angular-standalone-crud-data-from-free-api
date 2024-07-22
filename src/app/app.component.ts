import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {MenubarComponent} from "./components/menubar/menubar.component";
import {AuthUserService} from "./services/auth-user.service";

@Component({
  selector: 'app-root',
  standalone: true,
  // ** many child components can import this block []
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    MenubarComponent
  ],
  // ** many child services can provide this block []
  // ** or you can provide on config.ts
  providers : [
    // AuthUserService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-ag-standalone-crud-data-from-free-api';
}
