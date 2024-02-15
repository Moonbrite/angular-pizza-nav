import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pizza} from "../../models/pizza";
import {PizzaService} from "../../service/pizza.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-pizza-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './pizza-detail.component.html',
  styleUrl: './pizza-detail.component.scss'
})
export class PizzaDetailComponent {
  pizza?:Pizza;
constructor(private activedRoute:ActivatedRoute, private pizzaService :PizzaService) {
  let id: number = parseInt(<string>this.activedRoute.snapshot.paramMap.get("id"))
  this.pizza = this.pizzaService.getById(id);
}

}
