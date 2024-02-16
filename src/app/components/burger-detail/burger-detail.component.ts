import { Component } from '@angular/core';
import {Pizza} from "../../models/pizza";
import {ActivatedRoute} from "@angular/router";
import {PizzaService} from "../../service/pizza.service";
import {Burger} from "../../models/burger";
import {BurgerService} from "../../service/burger.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-burger-detail',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './burger-detail.component.html',
  styleUrl: './burger-detail.component.scss'
})
export class BurgerDetailComponent {

  burger?:Burger;
  constructor(private activedRoute:ActivatedRoute, private burgerService :BurgerService) {
    let id: number = parseInt(<string>this.activedRoute.snapshot.paramMap.get("id"))
    this.burger = this.burgerService.getById(id);
  }



}
