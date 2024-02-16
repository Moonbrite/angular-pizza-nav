import { Injectable } from '@angular/core';
import {Pizza} from "../models/pizza";
import {Burger} from "../models/burger";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizzas: Pizza[] = [];

  constructor() {
     let pizza1 = new Pizza(1,"Queen",25,false,"https://colmar.coeur-paysan.com/wp-content/uploads/2022/05/CP-Colmar-Pizza-reine.png");
     let pizza2  = new Pizza(2,"Le roi du code",45,false,"https://recette.supertoinette.com/151459/mp/pizza-reine.webp");
     this.pizzas.push(pizza1)
     this.pizzas.push(pizza2)
  }

  getById(id:number):Pizza {
    return this.pizzas.filter(pizza => pizza.id == id)[0]
  }

  add(pizza :Pizza){
    let id :number = this.pizzas.length + 1;
    pizza.id = id;
    this.pizzas.push(pizza);
  }

  remove(pizzaToRemove : Pizza): Pizza []{
    this.pizzas = this.pizzas.filter( pizza => pizza !== pizzaToRemove)
    return this.pizzas
  }
}
