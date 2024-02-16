import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Pizza} from "../../models/pizza";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {PizzaService} from "../../service/pizza.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-pizza',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
  ],
  templateUrl: './add-pizza.component.html',
  styleUrl: './add-pizza.component.scss'
})
export class AddPizzaComponent {

  constructor(private router:Router, private pizzaService :PizzaService,private toastr: ToastrService) {
  }

  newPizza:Pizza = new Pizza();
  newsIsVege: [boolean, boolean] = [
    true,
    false,
  ];


  OnSubmit() {
    this.pizzaService.add(this.newPizza)
    this.router.navigate(['/pizza'])
    this.toastr.success('Success', 'Pizza ajouter');
  }
}
