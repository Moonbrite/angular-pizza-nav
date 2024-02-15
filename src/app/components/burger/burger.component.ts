import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {Pizza} from "../../models/pizza";
import {Burger} from "../../models/burger";
import {BurgerService} from "../../service/burger.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-burger',
  standalone: true,
    imports: [
        MenuComponent,
        RouterLink,
        NgForOf
    ],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.scss'
})
export class BurgerComponent {

  burgers :Burger [] = [];

  constructor(BurgerService :BurgerService ) {
    this.burgers = BurgerService.burgers
  }

}
