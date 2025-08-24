import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  protected routerLinks : { router:string , label : string} [] = [
    { router : '',label:'Ag Standalone Crud Data'},
    { router : '/options',label:'Home (Reads,Read,Update,Delete)'},
    { router : '/create',label:'Create'},
  ]
}
