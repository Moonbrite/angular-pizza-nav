import { Routes } from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {PizzaComponent} from "./components/pizza/pizza.component";
import {BurgerComponent} from "./components/burger/burger.component";
import {HomeComponent} from "./components/home/home.component";
import {PizzaDetailComponent} from "./components/pizza-detail/pizza-detail.component";
import {BurgerDetailComponent} from "./components/burger-detail/burger-detail.component";

export const routes: Routes = [
  { path :'' ,component:HomeComponent},
  { path :'pizza/:id' ,component:PizzaDetailComponent},
  { path :'burger' ,component:BurgerComponent},
  { path :'burger/:id' ,component:BurgerDetailComponent},
  { path :'pizza' ,component:PizzaComponent},
];
