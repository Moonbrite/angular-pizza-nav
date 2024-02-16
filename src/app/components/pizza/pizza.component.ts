import {Component, inject, TemplateRef} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MenuComponent} from "../menu/menu.component";
import {Pizza} from "../../models/pizza";
import {PizzaService} from "../../service/pizza.service";
import {NgForOf, NgIf} from "@angular/common";
import {Burger} from "../../models/burger";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";

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

  private modalService = inject(NgbModal);

  constructor(private pizzaService : PizzaService , private toastService : ToastrService) {
    this.pizzas = pizzaService.pizzas
  }

  open(content: TemplateRef<any>, pizza: Pizza) {
    this.modalService.open(content, { ariaLabelledBy: 'Veuiller confirmer la supression' }).result.then(
      (result) => {
        this.pizzas = this.pizzaService.remove(pizza);
        this.toastService.error("Pizza suprimer")
      },
    );
  }


}
