import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MenuComponent} from "../menu/menu.component";
import {Pizza} from "../../models/pizza";
import {PizzaService} from "../../service/pizza.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [
    RouterLink,
    MenuComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {

  pizzas :Pizza [] = [];

  constructor(PizzaService : PizzaService) {
    this.pizzas = PizzaService.pizzas
  }


}
