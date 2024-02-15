import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgbCollapse
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isCollapsed = true
}
