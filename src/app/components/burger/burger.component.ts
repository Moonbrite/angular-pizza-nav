import {Component, inject, TemplateRef} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {Burger} from "../../models/burger";
import {BurgerService} from "../../service/burger.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";


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

  private modalService = inject(NgbModal);

  constructor(private burgerService :BurgerService, private toastService :ToastrService) {
    this.burgers = burgerService.burgers
  }

  open(content: TemplateRef<any>, burger: Burger) {
    this.modalService.open(content, { ariaLabelledBy: 'Veuiller confirmer la supression' }).result.then(
      (result) => {
        this.burgers = this.burgerService.remove(burger);
        this.toastService.error("Burger suprimer")
      },
    );
  }


}
