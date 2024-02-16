import { Injectable } from '@angular/core';
import {Pizza} from "../models/pizza";
import {Burger} from "../models/burger";

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  burgers: Burger[] = [];


  constructor() {
    let burger1 = new Burger(1,"Le burger de ouf1",1,"https://lacuisineensemble.fr/wp-content/uploads/2022/02/recette-burger-maison.jpg",);
    let burger2  = new Burger(2,"Le burger de ouf 2",2,"https://lacuisineensemble.fr/wp-content/uploads/2022/02/recette-burger-maison.jpg");
    this.burgers.push(burger1)
    this.burgers.push(burger2)
  }

  getById(id:number):Burger {
    return this.burgers.filter(burger => burger.id == id)[0]
  }

  add(burger: Burger) {
    let id :number = this.burgers.length + 1;
    burger.id = id;
    this.burgers.push(burger);
  }

  remove(burgerToRemove : Burger): Burger []{
    this.burgers = this.burgers.filter( burger => burger !== burgerToRemove)
    return this.burgers
  }
}
