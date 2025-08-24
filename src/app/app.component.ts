import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {MenubarComponent} from "./components/menubar/menubar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // ** many child components can import this block []
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    MenubarComponent
  ],
  // ** many service you can provide this block []  or on config.ts
  providers : [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
