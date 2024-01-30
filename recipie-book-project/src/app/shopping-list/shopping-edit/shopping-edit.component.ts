import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  public ingredientName: string;
  public ingredientQuantity: string;
  @Output() passIngredients: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  public onAddButtonClick(ingredientName: HTMLInputElement, ingredientQuantity: HTMLInputElement) {
    this.ingredientName = ingredientName.value;
    this.ingredientQuantity = ingredientQuantity.value;
    if (this.ingredientName !== '' && this.ingredientQuantity !== '') {
      this.passIngredients.emit(new Ingredient(this.ingredientName, +this.ingredientQuantity));
    }
  }

}
